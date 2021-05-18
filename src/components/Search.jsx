import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import Loader from "react-loader-spinner";

// console.log('bad req', axios('https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=')
// .then(res => {
//     console.log(res)
// }));

export default function Search() {   
    
    const [query, setQuery] = useState("");   
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=${query}`;
        async function load() {
            setLoading(true);
            await axios(queryUrl)
            .then(res => {  
                setMovies(res.data.results);   
                setTimeout(function(){ setLoading(false); }, 700);                 
            });
        } 
        if (query !== "") {       
            load();                                        
        }        
    }, [query]);

    let release = movies && movies.release_date;
    // let year = release && release.substr(0,4);

    return  (
        <div style={{backgroundColor:'black', paddingTop:'2%'}}>

            <Input type='text' placeholder="Search..." onChange={e => setQuery(e.target.value)} /> 

            <div style={{marginTop:'3%',justifyContent:'center', textAlign:'left', display:'flex', flexDirection:'column'}}>
                
                {loading ?
                
                <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', alignContent:'center'}}>
                    <Loader type="Puff" color="white" height={150} width={150}/>
                </div> 
                
                : 

                query !== "" ? movies.map((item) => 
                <NavLink style={{textAlign:'justify',textDecoration:'none'}} to={`/movie/${item.id}`}>
                    <Div>
                        <span style={{left:'30%', position:'absolute', maxWidth:'350px', fontFamily:'calibri', fontSize:'19px'}}>
                            
                                <Links key={item.id}>{item.original_title}
                                <br/>
                                <span style={{color:'grey'}}>{ item && item.release_date && item.release_date.substr(0,4)}</span>
                                </Links>
                            
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Img style={{float:'right', paddingLeft:'25%'}} src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt=":/"/>
                    </Div>
                </NavLink>
                ) : null}

            </div>
            
            <div style={{backgroundColor:'black', height:'83vh'}}></div>

    
         

        </div>

    
            

        

    )
}

const Links = styled.p`
text-align: left;
text-decoration: none;
color:white;
`

const Img = styled.img`

`

const Div = styled.div`
position:relative;
display:flex;
flex-direction:row;
justify-content:center;
padding-bottom:2%;
padding-top:2%;
margin-bottom:0.5%;
align-items: center;
/* border-style:solid;
border-width:2px; */
border-color: #202020;
transition:0.3s;
&:hover {
    transform: scale(1.1);
    transition-duration:0.3s;
}
`

const Input = styled.input`
border-radius:1px;
background-color:#CECECE;
border-style:none;
`