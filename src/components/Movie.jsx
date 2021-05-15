import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie() {

const { id } = useParams(); 

const [details, setDetails] = useState({});

useEffect(() => {

    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4295c0e29a9f109077cc7792f1675b63`)
    .then(res => setDetails(res && res.data)  

)}, []);

console.log(details)

let popularity = details && details.popularity;
let genres = details && details.genres;
let tagline = details && details.tagline;
let vote = details && details.vote_average;
let poster = details && `http://image.tmdb.org/t/p/w342${details.poster_path}`;
let release = details && details.release_date;
let year = release && release.substr(0,4);
let status = details && details.status;
let duration = details && details.runtime;
let plot = details.overview;



    return (
        <div style={{display:'flex', flexDirection:'row', padding: '3%', alignContent:'center'}}>
            
            <img src={poster} alt="No image found :/"/>

            <div style={{paddingLeft:'7%', display:'flex', flexDirection:'column'}}>
                
                <h1 style={{fontSize:'35px', textAlign:'left'}}>{details.title}
                <span style={{paddingLeft:'20%', fontSize:'22px'}}>{vote}<b style={{color: 'yellow'}}>★</b></span>
                </h1>
                <div style={{display:'flex', flexDirection:'row', fontSize:'13px'}}>
                    <b>{year}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp;<b> {duration} min</b>
                </div>
                <p style={{fontSize:'14px', textAlign:'left', marginTop:'10%'}}>
                    {plot}
                </p>
                <div style={{display:'flex', flexDirection:'row', fontSize:'12px', marginTop:'5%'}}>
                    
                            {genres && genres.map(g => 
                                <p key={g.id}>{g.name}&nbsp;&nbsp;</p>
                            )}
                </div>
            </div>      
        </div>
    )
}



const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    padding: 5%;
    margin-top: -4%;
    /* width: 80%; */
`

const Plot = styled.p`
    width: 30%;
    text-align: left;
`

