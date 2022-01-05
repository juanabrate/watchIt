import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {UseFavs, Remove} from './favLogic';
import preventClickthrough from 'react-prevent-clickthrough';
import styledComponents from 'styled-components';
 


export default function Favorites() {   
    
    const favs = UseFavs();
    const removeFromFav = Remove();

    return (
        <div style={{backgroundColor:'black', paddingTop:'2%'}}>

            <div style={{marginTop:'3%',justifyContent:'center', textAlign:'left', display:'flex', flexDirection:'column'}}>
                
                {favs ? favs.map((item) => 
                <NavLink style={{textAlign:'left',textDecoration:'none'}} to={`/movie/${item.id}`}>
                    <Div key={item.id} style={{position: 'relative', textAlign:'left', display:'flex', flexDirection:'row', justifyContent:'space-evenly', paddingBottom:'2%', alignItems:'center'}}>
                        <span style={{left:'34%', position:'absolute', maxWidth:'300px'}}>
                        
                            <Links><b style={{color: 'yellow'}}>★</b>&nbsp;{item.original_title}</Links>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        
                        <img style={{float:'right', paddingLeft:'30%'}} src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt="Pic not found"/>
                
                        {/* <button onClick={(e) => {console.log(e,'div'); handleXClick(e, item.id)}} style={{position:'absolute', right:'23%'}}>
                            X
                        </button> */}
                    </Div>
                </NavLink>
                    
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
transition:0.5s;
&:hover {
    transform: scale(1.1);
    transition-duration:0.3s;
}
`