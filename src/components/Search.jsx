import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from "react";
// import { NavLink } from 'react-router-dom';

// console.log('bad req', axios('https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=')
// .then(res => {
//     console.log(res)
// }));

export default function Search({ config }) {   
    console.log(config)
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
                    console.log(movies)
                    console.log(res);

                });
        }
    }, [query]);


    return (
        <div>

            <input type='text' onChange={e => setQuery(e.target.value)} /> 

            <div className='movies'>
                
                {query != "" ? movies.map((item) => 
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <p key={item.id}>{item.original_title}</p>
                        <img src={`http://image.tmdb.org/t/p/w92${item.poster_path}`} alt="No image found"/>
                    </div>
                ) : null}

            </div>

            {/* {loading ? <p>di} */}

        </div>
            

        

    )
}