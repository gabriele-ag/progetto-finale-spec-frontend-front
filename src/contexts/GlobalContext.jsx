import { createContext, useCallback, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [listAI, setListAI] = useState([])


    // Importo l'URL dal .env
    const urlList = import.meta.env.VITE_API_URL;


    // Chiamata API per tutta la lista delle IA
    const getListAI = useCallback(async () => {
        
        try {

            const response = await fetch(`${urlList}`)
            const data = await response.json()

            if(!response.ok) {
                throw new Error(`Errore nella risposta: ${response.status}`)
            }

            // Verifico se i dati arrivano correttamente, in console
            console.log(data)

            return data
        } catch(error) {
            throw new Error("Impossibile recuperari i dati:", error.message)
        } finally {
            console.log("Dati ricevuti con successo!")
        }
    }, [urlList])


    
    // Chiamata API per la singola IA
    const getSingleListAI = useCallback(async (id) => {
        
        try {
            
            const response = await fetch(`${urlList}/${id}`)
            const data = await response.json()
            
            if(!response.ok) {
                throw new Error(`Errore nella risposta: ${response.status}`)
            }
            
            // Verifico se i dati arrivano correttamente, in console
            console.log(data)
            
            return data
        } catch(error) {
            throw new Error(`Impossibile recuperari i dati: ${error.message}`)
        } finally {
            console.log("Dati ricevuti con successo!")
        }
    }, [urlList])


    return (
        <GlobalContext.Provider
            value={{getListAI, getSingleListAI}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export {GlobalContext, GlobalProvider}