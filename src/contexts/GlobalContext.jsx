import { createContext } from 'react';

// Importo customHook per le chiamate API
import useList from '../hook/useList';


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const {listAI, getListAI, getSingleAI, addToFavorites, removeFromFavorites, favorites, createNewAI, updateAI, deleteAI} = useList()

    return (
        <GlobalContext.Provider
            value={{listAI, getListAI, getSingleAI, addToFavorites, removeFromFavorites, favorites, createNewAI, updateAI, deleteAI}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider}