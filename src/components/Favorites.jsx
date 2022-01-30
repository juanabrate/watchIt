import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UseFavs, Remove } from './favLogic';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
 
export default function Favorites() {   
    
    const favs = UseFavs();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loading = () => {
            setLoading(true);            
        }
        loading();          
        setTimeout(() => setLoading(false), 700);
    }, []);


    return loading ? <LoaderDiv> <Loader type="Puff" color="white" height={300} width={300}/> </LoaderDiv> 
    : (
        <Back>
            <MovieDiv>    
                       

                {favs ? favs.map((item) => 

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


            </MovieDiv>
            <Footer></Footer>
        </Back>
    )
}

const LoaderDiv = styled.div`
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;`
const MovieDiv  = styled.div`
    margin-top: 3%;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
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
const P = styled.p`
    text-align: left;
    text-decoration: none;
    color: white;
`
const Back = styled.div`
    padding-top: 2%;
    background-color: black;
`

const Img = styled.img`
    float: right; 
    padding-left: 30%;
`
const Footer = styled.footer`
    background-color: black;
    height: 100vh;
`