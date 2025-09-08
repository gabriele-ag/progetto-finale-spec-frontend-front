import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useMemo, useContext } from "react"

// Import della card
import CardAI from "../components/CardAI"

// CSS
import "./CSS/ListAI.css"
import ModalConfronto from "../components/ModalConfronto"

// Import del Debounce
import useDebounce from "../hook/useDebounce"

const ListaIA = () => {

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sorted, setSorted] = useState(true)
    const [selectedAI, setSelectedAI] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailedAI, setDetailedAI] = useState([]);

    
    const debounceSearch = useDebounce(search, 700)

    const { listAI, getSingleAI } = useContext(GlobalContext)

    const handleForm = (event) => {
        event.preventDefault()
    }


    // Filtri per ricerca e ordinamento
    const filteredAI = useMemo(() => {

        // Filtri per ricerca titolo e per selezione categoria
        const filtered = listAI.filter((elem) => {
            const matchText = elem.title.toLowerCase().includes(search.toLowerCase()) 
            const matchSelectedCategory = selectedCategory === "" || elem.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()

            return matchText && matchSelectedCategory
        })

        // Ordinamento A-Z || Z-A
        const sortedByTitle = [...filtered].sort((a,b) => {
            return sorted ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        })

        return sortedByTitle

    }, [listAI, selectedCategory, sorted, debounceSearch])


     const toggleAISelected = (elemAI) => {
        if (selectedAI.find(curItem => curItem.id === elemAI.id)) {
            setSelectedAI(selectedAI.filter(curItem => curItem.id !== elemAI.id));
        } else {
            setSelectedAI([...selectedAI, elemAI]);
        }
    }

    // Eseguo chiamata per prendere le info aggiuntive da mettere nel comparatore
    const fetchDetailsForCompare = async () => {
        const promises = selectedAI.map(curElem => getSingleAI(curElem.id));
        const results = await Promise.all(promises)
        setDetailedAI(results)
        setIsModalOpen(true)
    }


    return (
        <>

            <main>


                <section className="section-listai">

                    {/* Pulsante per il confronto */}
                        {selectedAI.length >= 2 && (
                            <button
                                className="btn-confronta"
                                onClick={fetchDetailsForCompare}
                            >
                                Confronta ora!
                            </button>
                        )}

                    {/* Container */}
                    <div className="container">


                    {/* Input per i filtri */}
                        <div>
                            <form className="box-input" onSubmit={handleForm}>
                                <div>
                                    <input 
                                    type="text"
                                    placeholder="Cerca qui la tua IA..."
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    className="search-input" />

                                    <select 
                                    value={selectedCategory}
                                    onChange={(event) => setSelectedCategory(event.target.value)}
                                    className="category-input"
                                    >
                                        <option value="">Tutte le categorie</option>
                                        <option value="Multimedia & Editing">Multimedia & Editing</option>
                                        <option value="Design & Presentazioni">Design & Presentazioni</option>
                                        <option value="Assistenti Generali">Assistenti Generali</option>
                                        <option value="Scrittura & Contenuti">Scrittura & Contenuti</option>
                                        <option value="Performance Management">Performance Management</option>
                                        <option value="Ricerca AI">Ricerca AI</option>
                                        <option value="Marketing & SEO">Marketing & SEO</option>

                                    </select>
                                </div>

                                {/* Pulsante per ordinamento */}
                                <div>
                                    <span className="sorted-by">Ordina da:</span> 
                                    <button 
                                    className="btn-sort" 
                                    onClick={() => setSorted(!sorted)}
                                    >
                                        {sorted ? <i className="fa-solid fa-arrow-up-a-z"></i> : <i className="fa-solid fa-arrow-down-z-a"></i>}
                                    </button>
                                </div>

                            </form>
                        </div>

                        {/* Elenco delle IA */}
                        
                        <ul>
                            {filteredAI.length === 0 ? (
                                <p className="no-result-serch">Nessun risultato. Cosa stai cercando? 🤔</p>
                            ) : (
                                filteredAI.map((curElem) => (
                                <li key={curElem.id}>
                                    <CardAI
                                    id={curElem.id}
                                    title={curElem.title}
                                    subtitle={curElem.category}
                                    details={curElem.id}
                                    toggle={() => toggleAISelected(curElem)}
                                    addRemCompare={selectedAI.find((curItem) => curItem.id === curElem.id)? "Rimuovi": "Metti a confronto"}
                                    disabledCompare={selectedAI.length >= 3 && !selectedAI.find((curItem) => curItem.id === curElem.id)}
                                    />
                                </li>
                                ))
                            )}
                        </ul>
                        
                        
                        

                        <ModalConfronto
                        items={detailedAI}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}/>

                    </div>
                </section>

            </main>
        </>
    )
}

export default ListaIA