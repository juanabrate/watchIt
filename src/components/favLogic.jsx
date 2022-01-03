import React, {useState, useContext} from 'react';
import { loadFavoritesFromLocalStorage, saveFavoriteToLocalStorage } from '../helpers/saveToLocalStorage';

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
    //Local Storage array load or creation if it doesn't exists. As this works paralell to favorites array react state, I include it in this context provider
    let localStorageFavArray = loadFavoritesFromLocalStorage();
    if (localStorageFavArray === undefined) saveFavoriteToLocalStorage([]);

    const [favs, setFavs] = useState([]);

    // First local storage load.
    if (favs.length == 0 && localStorageFavArray?.length > 0) {
        setFavs([...localStorageFavArray])
    }    
    console.log(favs, 'favUseState');

    function pushFavs(nFav) {
        //If movie object exists in favorites useState, don't push it to state or localStorage.
        if (favs.some(e => e.id == nFav.id)) {
            return
        }
        setFavs([...favs, nFav])
        saveFavoriteToLocalStorage([...localStorageFavArray, nFav]);        
    }

    function remove(id) {
        //Remove movie object from state and local storage. 
       let newArr = favs.filter(el => el.id !== id);
       setFavs(newArr); 
       saveFavoriteToLocalStorage(newArr);
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