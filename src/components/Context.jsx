import React, {useContext, useState} from 'react';

const movieDetailsContext = React.createContext();

export function contextProvider({children}) {
    const [movie, setMovie] = useState()
}