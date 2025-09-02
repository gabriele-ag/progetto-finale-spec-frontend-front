import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useMemo, useContext } from "react"

import { useNavigate } from "react-router-dom"

// Import della card
import CardAI from "../components/CardAI"

// CSS
import "./CSS/ListAI.css"

const ListaIA = () => {

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sorted, setSorted] = useState(true)
    const [selectedAI, setSelectedAI] = useState([])

    const navigate = useNavigate();

    const { listAI } = useContext(GlobalContext)

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

    }, [listAI, search, selectedCategory, sorted])


     const toggleAISelected = (elemAI) => {
        if (selectedAI.find(curItem => curItem.id === elemAI.id)) {
            setSelectedAI(selectedAI.filter(curItem => curItem.id !== elemAI.id));
        } else {
            setSelectedAI([...selectedAI, elemAI]);
        }
    }


    return (
        <>

            <main>

                <section className="section-listai">

                    {/* Container */}
                    <div className="container">

                    {/* Input per i filtri */}
                        <div className="box-input">
                            <form onSubmit={handleForm}>

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

                            </form>
                        
                        
                            {/* Pulsante per ordinamento */}
                            
                            <button 
                            className="btn-sort" 
                            onClick={() => setSorted(!sorted)}
                            >
                                {sorted ? "A-Z" : "Z-A"}
                            </button>
                        </div>

                        {/* Elenco delle IA */}
                        <ul>
                            {filteredAI.map((curElem) => (
                                <li key={curElem.id}>
                                    {/* <Link to={`/listaia/${curList.id}`}> */}
                                        <CardAI 
                                        title={curElem.title}
                                        subtitle={curElem.category}
                                        details={curElem.id}
                                        />
                                        <button onClick={() => toggleAISelected(curElem)}>
                                            {selectedAI.find(curItem => curItem.id === curElem.id) ? "Rimuovi" : "Metti a confronto"}
                                        </button>
                                    {/* </Link> */}
                                </li>
                            ))}
                        </ul>

                        {selectedAI.length >= 2 && (
                            <button
                                className="btn-confronta"
                                onClick={() => {
                                const ids = selectedAI.map(ai => ai.id);
                                navigate(`/confronto?id1=${ids[0]}&id2=${ids[1]}`);
                                }}
                            >
                                Confronta ora
                            </button>
                        )}

                    </div>
                </section>

            </main>
        </>
    )
}

export default ListaIA