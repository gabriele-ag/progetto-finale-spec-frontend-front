import { createContext } from 'react';

// Importo customHook per le chiamate API
import useList from '../hook/useList';



const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const {listAI, getListAI, getSingleAI} = useList()

    return (
        <GlobalContext.Provider
            value={{listAI, getListAI, getSingleAI}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider}