import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './Home.css';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjk1YzBlMjlhOWYxMDkwNzdjYzc3OTJmMTY3NWI2MyIsInN1YiI6IjYwOWU5N2Y2ODM5MDE4MDAzZmNjMzlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bm5rF54lpCwETLSTpUOcWkeCAORlii85ar4SbkSGmKY';

export default function Home() {

    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        axios('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-05-15&primary_release_date.lte=2021-07-15&api_key=4295c0e29a9f109077cc7792f1675b63')
        .then(res => setUpcoming(res.data.results));
    }, []);

    console.log(upcoming);

    return (

        <div className="grid">
            <div className="grid-item grid-item-1"></div>
            <div className="grid-item grid-item-2"></div>
            <div className="grid-item grid-item-3"></div>
            <div className="grid-item grid-item-4"></div>
            <div className="grid-item grid-item-5"></div>
            <div className="grid-item grid-item-6"></div>
        </div>

    ) 

}
