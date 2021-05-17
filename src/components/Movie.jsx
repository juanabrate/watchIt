import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from "react-loader-spinner";
import {UpdateFavs} from './favLogic';

export default function Movie() {


const pushFavs = UpdateFavs();

const { id } = useParams(); 

const [details, setDetails] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {

    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4295c0e29a9f109077cc7792f1675b63`)
    .then(res => setDetails(res && res.data),

    setLoading(false)

    

)}, [id]);

console.log('movie', details)

// let popularity = details && details.popularity;
let genres = details && details.genres;
// let tagline = details && details.tagline;
let vote = details && details.vote_average;
let poster = details && `http://image.tmdb.org/t/p/w342${details.poster_path}`;
let release = details && details.release_date;
let year = release && release.substr(0,4);
// let status = details && details.status;
let duration = details && details.runtime;
let plot = details.overview;
// let movieId = details.id;

// console.log(favs);

    return loading ? <Loader type='Grid' color='white' timeout={3000}/> : (
<>
        <div style={{fontFamily:'calibri', display:'flex', flexDirection:'row', padding: '3%', alignContent:'center', backgroundColor:'black', color:'white'}}>
            
            <img src={poster} alt=":/"/>

            <div style={{paddingLeft:'7%', display:'flex', flexDirection:'column'}}>
                
                <h1 style={{fontSize:'35px', textAlign:'left'}}>{details.title}
                <span style={{paddingLeft:'20%', fontSize:'22px'}}>{vote}&nbsp;<b style={{color: 'yellow'}}>★</b></span>
                </h1>
                <div style={{display:'flex', flexDirection:'row', fontSize:'13px', color:'grey', marginTop:'-2%'}}>
                    <b>{year}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp;<b> {duration} min</b>
                </div>
                {/* <p style={{fontSize:'12px', textAlign:'left'}}>"{tagline}"</p> */}
                <p style={{fontSize:'14px', textAlign:'left', marginTop:'10%'}}>
                    {plot}
                </p>
                <div style={{display:'flex', flexDirection:'row', fontSize:'12px', marginTop:'5%',color:'grey'}}>
                    
                            {genres && genres.map(g => 
                                <p key={g.id}>{g.name}&nbsp;&nbsp;</p>
                            )}
                </div>
                <div>
                    <Button onClick={() => pushFavs(details)}>
                        FAV
                    </Button>
                </div>
                
            </div>      
            
            
        </div>
        <footer style={{backgroundColor:'black', height:'10vh'}}></footer>
        </>
    )
}

const Button = styled.button`
float:left;
margin-top:5%;
border-radius:10%;
font-family: calibri;
background-color:black;
color:white;
border-width:1px;
transition:0.5s;
&:hover{
    border-color: gold;
    color: gold;
    transition-duration:0.5s;
}
`

// const RowDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     /* align-items: center; */
//     padding: 5%;
//     margin-top: -4%;
//     /* width: 80%; */
// `

// const Plot = styled.p`
//     width: 30%;
//     text-align: left;
// `



