import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
    return (
        <>
        <MainDiv>
            <NavBar>
                <NavLink to="/home" style={{textDecoration:'none', color:'grey'}}>
                    <Span>
                        UPCOMING
                    </Span>
                </NavLink >
                <NavLink to="/search" style={{textDecoration:'none', color:'grey'}}>
                    <Span>
                        SEARCH
                    </Span>  
                </NavLink>
                <NavLink to="/favorites" style={{textDecoration:'none', color:'grey'}}>
                    <Span>
                        FAVORITES
                    </Span>
                </NavLink>           
            </NavBar>            
        </MainDiv>
        <NavLine></NavLine>
        </>
    )
}

const MainDiv = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: black;
    font-family: calibri;
`
const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 42vh;
    height: 5.5vh;
    background-color: black;
    color: white;
`

const Span = styled.span`
    transition:0.5s;
        &:hover {
            color: white;
            transition-duration:0.5s;
        }
`
const NavLine = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: 1px;
    width: 100%;
`