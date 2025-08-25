import { createContext } from 'react';

// Importo customHook per le chiamate API
import useList from '../hook/useList';



const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const {listAI, getListAI, getSingleListAI} = useList()

    return (
        <GlobalContext.Provider
            value={{listAI, getListAI, getSingleListAI}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider}