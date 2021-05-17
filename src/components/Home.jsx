import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './Home.css';
import { NavLink, Redirect } from 'react-router-dom';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjk1YzBlMjlhOWYxMDkwNzdjYzc3OTJmMTY3NWI2MyIsInN1YiI6IjYwOWU5N2Y2ODM5MDE4MDAzZmNjMzlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bm5rF54lpCwETLSTpUOcWkeCAORlii85ar4SbkSGmKY';

export default function Home() {

    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        axios('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-05-15&primary_release_date.lte=2021-07-15&api_key=4295c0e29a9f109077cc7792f1675b63')
        .then(res => setUpcoming(res.data.results));
    }, []);

    // console.log(upcoming[0].poster_path);
    let path = upcoming && upcoming[0] && upcoming[0].poster_path;
    let id = upcoming && upcoming[0] && upcoming[0].id;
    let path1 = upcoming && upcoming[1] && upcoming[1].poster_path;
    let id1 = upcoming && upcoming[1] && upcoming[1].id;
    let path2 = upcoming && upcoming[2] && upcoming[2].poster_path;
    let id2 = upcoming && upcoming[2] && upcoming[2].id;
    let path3 = upcoming && upcoming[3] && upcoming[3].poster_path;
    let id3 = upcoming && upcoming[3] && upcoming[3].id;
    let path4 = upcoming && upcoming[4] && upcoming[4].poster_path;
    let id4 = upcoming && upcoming[4] && upcoming[4].id;
    let path5 = upcoming && upcoming[5] && upcoming[5].poster_path;
    let id5 = upcoming && upcoming[5] && upcoming[5].id;
    let path6 = upcoming && upcoming[6] && upcoming[6].poster_path;
    let id6 = upcoming && upcoming[6] && upcoming[6].id;
    let path7 = upcoming && upcoming[7] && upcoming[7].poster_path;
    let id7 = upcoming && upcoming[7] && upcoming[7].id;
    let path8 = upcoming && upcoming[8] && upcoming[8].poster_path;
    let id8 = upcoming && upcoming[8] && upcoming[8].id;
    let path9 = upcoming && upcoming[9] && upcoming[9].poster_path;
    let id9 = upcoming && upcoming[9] && upcoming[9].id;
    let path10 = upcoming && upcoming[10] && upcoming[10].poster_path;
    let id10 = upcoming && upcoming[10] && upcoming[10].id;
    let path11 = upcoming && upcoming[11] && upcoming[11].poster_path;
    let id11 = upcoming && upcoming[11] && upcoming[11].id;

    return (
        <div style={{position:'relative', backgroundColor:'black'}}>
            {/* <div className="h1"><h2>Upcoming</h2></div>
            <div className="h2"><h1>2021</h1></div> */}
        <div className="grid">
            <NavLink to={`/movie/${id}`}>
                <div className="grid-item grid-item-1">
                    <img src={`http://image.tmdb.org/t/p/w342${path}`} alt="No image" />
                </div> 
            </NavLink>
            <NavLink to={`/movie/${id1}`}>
            <div className="grid-item grid-item-2">
                    <img src={`http://image.tmdb.org/t/p/w342${path1}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id2}`}>
            <div className="grid-item grid-item-3">
                    <img src={`http://image.tmdb.org/t/p/w342${path2}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id3}`}>
            <div className="grid-item grid-item-4">
                    <img src={`http://image.tmdb.org/t/p/w342${path3}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id4}`}>
            <div className="grid-item grid-item-5">
                    <img src={`http://image.tmdb.org/t/p/w342${path4}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id5}`}>
            <div className="grid-item grid-item-6">
                    <img src={`http://image.tmdb.org/t/p/w342${path5}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id6}`}>
            <div className="grid-item grid-item-7">
                    <img src={`http://image.tmdb.org/t/p/w342${path6}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id7}`}>
            <div className="grid-item grid-item-8">
                    <img src={`http://image.tmdb.org/t/p/w342${path7}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id8}`}>
            <div className="grid-item grid-item-9">
                    <img src={`http://image.tmdb.org/t/p/w342${path8}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id9}`}>
            <div className="grid-item grid-item-10">
                    <img src={`http://image.tmdb.org/t/p/w342${path9}`} alt="No image" />
                    </div>
            </NavLink>
            <NavLink to={`/movie/${id10}`}>
            <div className="grid-item grid-item-11">
                    <img src={`http://image.tmdb.org/t/p/w342${path10}`} alt="No image" />
                    </div></NavLink> 
            <NavLink to={`/movie/${id11}`}>
            <div className="grid-item grid-item-12">
                    <img src={`http://image.tmdb.org/t/p/w342${path11}`} alt="No image" />
                    </div>
            </NavLink>                  
                </div>
        </div>
    ) 
}
