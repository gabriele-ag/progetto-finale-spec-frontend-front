import { createContext } from 'react';

// Importo customHook per le chiamate API
import useList from '../hook/useList';


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const {listAI, getListAI, getSingleAI, addToFavorites, removeFromFavorites, favorites} = useList()

    return (
        <GlobalContext.Provider
            value={{listAI, getListAI, getSingleAI, addToFavorites, removeFromFavorites, favorites}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider}