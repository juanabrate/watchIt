import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function Movie() {

const { id } = useParams(); 

const [details, setDetails] = useState({});

useEffect(() => {

    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4295c0e29a9f109077cc7792f1675b63`)
    .then(res => setDetails(res.data)  

)}, []);

console.log(details)
    return (
        <div>
            
        </div>
    )
}