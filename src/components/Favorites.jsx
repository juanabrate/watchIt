import React, {useContext, useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {UseFavs, Remove} from './favLogic';
import axios from 'axios';

 
export default function Favorites() {   
    
    const favs = UseFavs();
    const removeFavs = Remove();

    const [movies, setMovies] = useState([]);
    

    console.log('favo', favs)


    return (
        <div style={{backgroundColor:'black', paddingTop:'2%'}}>

            <div style={{marginTop:'3%',justifyContent:'center', textAlign:'left', display:'flex', flexDirection:'column'}}>
                
                {favs ? favs.map((item) => 
                    <div key={item.id} style={{textAlign:'left', display:'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'2%', alignItems:'center'}}>
                        <NavLink style={{textAlign:'left',textDecoration:'none'}} to={`/movie/${item.id}`}>
                            <Links><b style={{color: 'yellow'}}>★</b>&nbsp;{item.original_title}</Links>
                        </NavLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={`http://image.tmdb.org/t/p/w92${item.poster_path}`} alt="No image found"/>
                        
                    {/* <button onClick={() => removeFavs(item.id)} style={{float:'left', marginTop:'5%', borderRadius:'10%', fontFamily:'calibri'}}>
                        X
                    </button> */}
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