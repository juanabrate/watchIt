import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from "react";

// console.log('bad req', axios('https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=')
// .then(res => {
//     console.log(res)
// }));

export default function Search() {   

    const [query, setQuery] = useState("");   
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=4295c0e29a9f109077cc7792f1675b63&query=${query}`;

        if (query != "") {
            setLoading(true);
            axios(url)
                .then(res => {
                    setLoading(false);

                    setMovies(res.data.results);
                    console.log(movies)

                });
        }
        
        

    }, [query]);


    return (
        <div>

            <input type='text' onChange={e => setQuery(e.target.value)} /> 

            <div className='movies'>
                
                {query != "" ? movies.map((item) => 
                    <p key={item.id}>{item.original_title}</p>
                ) : null}

            </div>

            {/* {loading ? <p>di} */}

        </div>
            

        

    )
}