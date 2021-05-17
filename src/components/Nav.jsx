import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
export default function Nav() {
    return (
        <>
        <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor: '#080808', fontFamily:'calibri'}}>
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
        </div>
        <div style={{display: 'flex', flexDirection:'row', backgroundColor:'cyan', height:'1px', width:'100%'}}></div>
        </>
    )
}

const NavBar = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 42vh;
    /* padding-right: 40%; */
    height: 5.5vh;
    background-color: #080808;
    color: white;
`

const Span = styled.span`
transition:0.5s;
&:hover {
    color: white;
    transition-duration:0.5s;
}
`