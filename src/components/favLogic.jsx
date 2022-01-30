import React, { useState, useContext } from 'react';
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
    //Local Storage array load or creation if it doesn't exist. All local storage logic will work paralell to favorites React state.
    let localStorageFavArray = loadFavoritesFromLocalStorage();
    if (localStorageFavArray === undefined) saveFavoriteToLocalStorage([]);

    // State where favorite movie objects will be saved.
    const [favs, setFavs] = useState([]);  

    // First local storage load if nothing's there.
    if (favs.length == 0 && localStorageFavArray?.length > 0) {
        setFavs([...localStorageFavArray])
    }    


    function pushFavs(newFav) {
        //Push movie object to state and LS function. Won't be pushed if it's already there. 
        if (favs.some(e => e.id == newFav.id)) {
            return
        }
        setFavs([newFav, ...favs])
        saveFavoriteToLocalStorage([newFav, ...localStorageFavArray]);        
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