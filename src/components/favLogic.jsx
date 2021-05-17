import React, {useState, useContext} from 'react';

const FavContext = React.createContext();
const FavUpdate = React.createContext();

export function UseFavs() {
    return useContext(FavContext);
}

export function UpdateFavs() {
    return useContext(FavUpdate);
}

export function FavProvider({ children }) {
    const [favs, setFavs] = useState([1]);

    function pushFavs(nFav) {
        setFavs([...favs, nFav])
    }

    return (
        <FavContext.Provider value={favs}>
            <FavUpdate.Provider value={pushFavs}>
                {children}
            </FavUpdate.Provider>
        </FavContext.Provider>
    )
}