import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

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
        // const imgUrl = `http://image.tmdb.org/t/p/w342${img_path}`;

        if (query != "") {
            setLoading(true);
            axios(queryUrl)
                .then(res => {
                    setLoading(false);

                    setMovies(res.data.results);
                    

                });
        }
    }, [query]);


    return (
        <div style={{backgroundColor:'black', paddingTop:'2%'}}>

            <input placeholder='Movies' type='text' onChange={e => setQuery(e.target.value)} /> 

            <div style={{marginTop:'3%',justifyContent:'center', textAlign:'left', display:'flex', flexDirection:'column'}}>
                
                {query != "" ? movies.map((item) => 
                    <div style={{position: 'relative', display:'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'2%', alignItems:'center'}}>
                        <span style={{left:'34%', position:'absolute', maxWidth:'300px'}}>
                            <NavLink style={{textAlign:'justify',textDecoration:'none'}} to={`/movie/${item.id}`}>
                                <Links key={item.id}>{item.original_title}</Links>
                            </NavLink>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img style={{float:'right', paddingLeft:'25%'}} src={`http://image.tmdb.org/t/p/w92${item.poster_path}`} alt="No image found"/>
                    </div>
                ) : null}

            </div>
            <div style={{backgroundColor:'black', height:'100vh'}}></div>
            {/* {loading ? <p>di} */}

        </div>
            

        

    )
}

const Links = styled.p`
text-align: left;
text-decoration: none;
color:white;


`