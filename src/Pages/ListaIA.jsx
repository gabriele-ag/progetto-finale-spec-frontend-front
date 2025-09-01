import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useMemo, useContext } from "react"

const ListaIA = () => {

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sortedTitle, setSortedTitle] = useState(true)

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
            return sortedTitle ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        })

        return sortedByTitle

    }, [listAI, search, selectedCategory, sortedTitle])




    return (
        <>

            <main>

                {/* Input per i filtri */}
                <form onSubmit={handleForm}>

                    <input 
                    type="text"
                    placeholder="Cerca qui la tua IA..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} />

                    <select 
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="">Tutte le categorie</option>
                        <option value="Generazione testo">Generazione testo</option>
                        <option value="Generazione Immagini">Generazione Immagini</option>
                        <option value="Video AI">Video AI</option>
                        <option value="Copywriting">Copywriting</option>
                        <option value="Design Assistito">Design Assistito</option>
                        <option value="Produttività">Produttività</option>
                        <option value="Correzione Testi">Correzione Testi</option>
                        <option value="Video Editing AI">Video Editing AI</option>
                        <option value="Video da Testo">Video da Testo</option>
                        <option value="Audio/Video Editing">Audio/Video Editing</option>
                        <option value="Presentazioni">Presentazioni</option>
                        <option value="SEO AI">SEO AI</option>
                        <option value="Ricerca AI">Ricerca AI</option>
                        <option value="Parafrasi">Parafrasi</option>

                    </select>

                </form>
                
                {/* Pulsante per ordinamento */}
                <button onClick={() => setSortedTitle(!sortedTitle)}>
                    {sortedTitle ? "A-Z" : "Z-A"}
                </button>

                {/* Elenco delle IA */}
                <ul>
                    {filteredAI.map((curList) => (
                        <li key={curList.id}>
                            <h2>{curList.title}</h2>
                            <p>{curList.category}</p>
                        </li>
                    ))}
                </ul>

            </main>
        </>
    )
}

export default ListaIA