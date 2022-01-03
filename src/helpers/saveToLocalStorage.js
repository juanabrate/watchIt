export const loadFavoritesFromLocalStorage = () => {
    try {
        const serializedData = localStorage.getItem("LSfavArray");
        if (serializedData === null) {
            return undefined; 
        }
        return JSON.parse(serializedData); 
    } catch (error) {
        console.log('get item error');
        return undefined; 
    }
};
export const saveFavoriteToLocalStorage = (movieObject) => {

    try {
        let serializedData = JSON.stringify(movieObject);
        localStorage.setItem("LSfavArray", serializedData);
    } catch (error) {
        console.log('set item error');        
    }
};