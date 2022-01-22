import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UpdateFavs } from './favLogic';
import { UseFavs, Remove } from './favLogic';
import axios from 'axios';
import styled from 'styled-components';
import Loader from "react-loader-spinner";

export default function Movie() {

    const pushFavs = UpdateFavs();
    const removeFav = Remove();
    const favs = UseFavs();
    const { id } = useParams(); 
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {    
        const load = () => {
            setLoading(true)
            axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4295c0e29a9f109077cc7792f1675b63`)
            .then(res => setDetails(res?.data))
            setTimeout(() => setLoading(false), 700);
        }
        load();
    }, [id]);

    let boolFav = false;
    if (favs.some(e => e.id == details.id)) boolFav = true;

    let genres = details?.genres;
    let vote = details?.vote_average;
    let poster = `http://image.tmdb.org/t/p/w342${details?.poster_path}`;
    let release = details?.release_date;
    let year = release?.substr(0,4);
    let duration = details?.runtime;
    let plot = details?.overview;

    return loading ? <LoaderDiv> <Loader type="Puff" color="white" height={300} width={300}/> </LoaderDiv> : (
        <>
            <MainDiv>            
                <img src={poster} alt=":/"/>
                <MovieDiv>       

                    <H1>
                        {details.title}
                        <Vote>
                            {vote} &nbsp; <b style={{color: 'yellow'}}> ★ </b>
                        </Vote>
                    </H1>

                    <YearDuration>
                        <b>{year}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp;<b> {duration} min</b>
                    </YearDuration>

                    <Plot>
                        {plot}
                    </Plot>

                    <Genres>                    
                        {genres?.map(g => 
                            <p key={g.id}>{g.name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        )}
                    </Genres>

                    <div>
                        <FavButton onClick={() => pushFavs(details)}>
                            FAV
                        </FavButton>

                        { boolFav ? 
                        <RemoveButton onClick={() => removeFav(details.id)}>
                            Remove FAV
                        </RemoveButton>
                        : null }                    
                    </div>
                    
                </MovieDiv>                  
            </MainDiv>
            <Footer></Footer>
        </>
    )
}   

const MainDiv = styled.div`
    font-family: calibri;
    display: flex;
    flex-direction: row;
    padding: 3%;
    align-content: center;
    background-color: black;
    color: white;
`
const LoaderDiv = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    align-content: center;
`
const MovieDiv = styled.div`
    padding-left: 7%;    
    display: flex;
    flex-direction: column;
`
const H1 = styled.h1`
    font-size: 35px;
    text-align: left;
`
const Vote = styled.span`
    padding-left: 20%;
    font-size: 22px;
`
const YearDuration = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    color: grey;
    margin-top: -2%;
`
const Plot = styled.p`
    font-size: 15px;
    text-align: left;
    margin-top: 10%;
`
const Genres = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    margin-top: 5%;       
    color: grey;
`
const FavButton = styled.button`
    float: left;
    margin-top: 5%;
    border-radius: 10%;
    font-family: calibri;
    background-color:black;
    color:white;
    border-width: 1px;
    transition: 0.5s;
        &:hover{
            border-color: gold;
            color: gold;
            transition-duration:0.5s;
        }
`
const RemoveButton = styled.button`
    margin-left: 2%;
    float: left;
    margin-top: 5%;
    border-radius: 10%;
    font-family: calibri;
    background-color: black;
    color: white;
    border-width: 1px;
    transition: 0.5s;
        &:hover{
            border-color: gold;
            color: gold;
            transition-duration:0.5s;
        }
`
const Footer = styled.footer`
    background-color: black;
    height: 10vh;
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



