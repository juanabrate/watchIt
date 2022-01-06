import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';

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
    

        return loading ? <div style={{backgroundColor:'black', height:'100vh', display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>
                <Loader type="Puff" color="white" height={300} width={300}/>
                </div> 
                : (
                <>
        <div style={{position:'relative', backgroundColor:'black'}}>
            {/* <div className="h1"><h2>Upcoming</h2></div>
            <div className="h2"><h1>2021</h1></div> */}
                <div className="grid">

                {poster_id_data?.map((e) => (
                        // {poster_id_data? console.log(e) : null}
                        <NavLink to={`/movie/${e.id}`} key={e.id}>
                                <div className="grid-item">
                                        <img src={`http://image.tmdb.org/t/p/w342${e.path}`} alt=":/" />
                                </div> 
                        </NavLink>
                ))}
                </div>
        </div>
        <footer style={{backgroundColor:'black', height:'100vh'}}></footer>
        </>
    ) 
}
