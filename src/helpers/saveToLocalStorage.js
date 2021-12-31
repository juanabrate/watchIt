export const loadFavoritesFromLocalStorage = () => {
    try {
        const serializedData = localStorage.getItem("LSfavArray");
        if (serializedData === null) {
            return undefined; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
        }
        return JSON.parse(serializedData); // Si encontramos con exito nuestro storage lo devolvemos.
    } catch (error) {
        console.log('get item error');
        return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
    }
};
export const saveFavoriteToLocalStorage = (prod) => {

    try {
        let serializedData = JSON.stringify(prod);
        localStorage.setItem("LSfavArray", serializedData);
    } catch (error) {
        console.log('set item error');
        // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
    }
};