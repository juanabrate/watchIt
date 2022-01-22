import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import Loader from "react-loader-spinner";

export default function Search() {   
    
    const [query, setQuery] = useState("");   
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=${query}`;
        const load = () => {
            setLoading(true);
            axios(queryUrl)
            .then(res => {  
                setMovies(res?.data?.results);   
                setTimeout(() => setLoading(false), 700);                 
            });
        } 
        if (query !== "") load();                                                
    }, [query]);

    return  (
        <MainDiv>            
            <Input type='text' placeholder="Search..." onChange={e => setQuery(e.target.value)} /> 
            <SearchDiv>
                
                {loading ?
                
                <LoaderDiv> <Loader type="Puff" color="white" height={150} width={150}/> </LoaderDiv> 
                
                : 

                query !== "" ? movies.map((item) => 

                <NavLink to={`/movie/${item.id}`} key={item.id} style={{textAlign:'justify',textDecoration:'none'}}>
                    <MovieCard>
                        <MovieData>                            
                                <P key={item.id}> {item.original_title}
                                <br/>
                                <span style={{color:'grey'}}> {item.release_date?.substr(0,4)} </span>
                                </P>                            
                        </MovieData>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Img src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt=":/"/>
                    </MovieCard>
                </NavLink>

                ) : null}
            </SearchDiv>            
            <Footer></Footer>    
        </MainDiv>
    )
}


const MainDiv = styled.div`
    background-color: black;
    padding-top: 2%;
`
const SearchDiv = styled.div`
    margin-top: 3%;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
`
const LoaderDiv = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    align-content: center;
`
const P = styled.p`
    text-align: left;
    text-decoration: none;
    color: white;
`
const Img = styled.img`
    float: right;
    padding-left: 25%;
`
const MovieCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 1%;
    padding-top: 1%;
    margin-top: 3%;
    align-items: center;
    border-color: #202020;
    transition: 0.4s;
        &:hover {
            transform: scale(1.2);
            transition-duration: 0.4s;
            background-color: #252525;
        }
`
const MovieData = styled.div`
    left: 30%; 
    position: absolute;
    max-width: 350px;
    font-family: calibri;
    font-size: 19px;
`
const Input = styled.input`
    border-radius: 5px;
    background-color:#cececeed;
    border-style: none;
        &:focus {
            background-color: white;
            border-style: none;
}
`
const Footer = styled.footer`
    background-color: black;
    height: 83vh;
`