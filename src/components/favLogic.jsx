import React, {useState, useContext} from 'react';

const FavContext = React.createContext();
const FavUpdate = React.createContext();
const RemoveFav = React.createContext();

export function UseFavs() {
    return useContext(FavContext);
}

export function UpdateFavs() {
    return useContext(FavUpdate);
}

export function Remove() {
    return useContext(RemoveFav);
}

export function FavProvider({ children }) {
    const [favs, setFavs] = useState([]);

    function pushFavs(nFav) {
        if (!favs.includes(nFav)) {
            setFavs([...favs, nFav])
        }       
    }

    function remove(id) {
       let newArr = favs.filter(el => el.id == id);
       setFavs(newArr); 
    }

    return (
        <FavContext.Provider value={favs}>
            <FavUpdate.Provider value={pushFavs}>
                <RemoveFav.Provider value={remove}>
                    {children}
                </RemoveFav.Provider>               
            </FavUpdate.Provider>
        </FavContext.Provider>
    )
}