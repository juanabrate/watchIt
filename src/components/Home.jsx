import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjk1YzBlMjlhOWYxMDkwNzdjYzc3OTJmMTY3NWI2MyIsInN1YiI6IjYwOWU5N2Y2ODM5MDE4MDAzZmNjMzlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bm5rF54lpCwETLSTpUOcWkeCAORlii85ar4SbkSGmKY';

const date = new Date();
console.log(date)

export default function Home() {

        const [upcoming, setUpcoming] = useState([]);
        const [loading, setLoading] = useState(false);    

        useEffect(() => {        
                const loading = () => {
                        setLoading(true);
                        axios('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-12-01&primary_release_date.lte=2022-12-31&api_key=4295c0e29a9f109077cc7792f1675b63')
                        .then(res => setUpcoming(res?.data?.results));
                        setTimeout(() => setLoading(false), 700);
                }
                loading();           
        }, []);

        console.log(upcoming)

        const poster_id_iterator = () => {
                
                const dataObjectArray = [];

                for (let i = 0; i < 20; i++) {
                        let path = upcoming[i]?.poster_path;
                        let id = upcoming[i]?.id;
                        dataObjectArray.push( {path, id} )
                }                
                return dataObjectArray;
        }

        const poster_id_data = poster_id_iterator();    
    

        return loading ? <LoaderDiv> <Loader type="Puff" color="white" height={300} width={300}/> </LoaderDiv> 
                : (
                <>
        <GridDiv>
                <div className="grid">

                {poster_id_data?.map((e) => (
                        <NavLink to={`/movie/${e.id}`} key={e.id}>
                                <div className="grid-item">
                                        <img src={`http://image.tmdb.org/t/p/w342${e.path}`} alt=":/" />
                                </div> 
                        </NavLink>
                ))}
                </div>
        </GridDiv>
        <Footer></Footer>
        </>
    ) 
}

const LoaderDiv = styled.div`
background-color: black;
height: 100vh;
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
`
const GridDiv = styled.div`
position: relative;
background-color: black;
`

const Footer = styled.footer`
background-color: black;
height: 100vh;
`
