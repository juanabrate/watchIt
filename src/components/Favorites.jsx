import { NavLink } from 'react-router-dom';
import { UseFavs, Remove } from './favLogic';
import styled from 'styled-components';
 
export default function Favorites() {   
    
    const favs = UseFavs();

    return (
        <Back>
            <MovieDiv>                
                {favs ? favs.map((item) => 

                <NavLink to={`/movie/${item.id}`} style={{textAlign:'left',textDecoration:'none'}}>
                    <Movie key={item.id}>
                        <TitleSpan>                        
                            <Title><b style={{color: 'yellow'}}>★</b>&nbsp;{item.original_title}</Title> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        
                        </TitleSpan> 
                        <Img src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt="Pic not found"/>
                    </Movie>
                </NavLink>
               
                ) : null}
            </MovieDiv>
            <div style={{backgroundColor:'black', height:'100vh'}}></div>
        </Back>
    )
}

const TitleSpan = styled.span`
    left: 34%;
    position: absolute;
    max-width: 300px;
`
const Title = styled.p`
    text-align: left;
    text-decoration: none;
    color: white;
`
const Movie = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 2%;
    padding-top: 2%;
    /* margin-bottom: -2%; */
    align-items: center;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
        background-color: #303030
    }
`
const Back = styled.div`
    padding-top: 2%;
    background-color: black;
`
const MovieDiv  = styled.div`
    marginTop: 3%;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
`
const Img = styled.img`
    float: right; 
    padding-left: 30%;
`