import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useMemo, useContext } from "react"

const ListaIA = () => {

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const { listAI } = useContext(GlobalContext)

    const handleForm = (event) => {
        event.preventDefault()
    }

    const filteredAI = useMemo(() => {
        return listAI.filter((elem) => {
            const matchText = elem.title.toLowerCase().includes(search.toLowerCase())

            return matchText
        })
    }, [listAI, search])



    return (
        <>

            <main>
                {/* Input per i filtri */}
                <form action="" onSubmit={handleForm}>

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
                        <option value="Video IA">Video IA</option>
                        <option value="Copywriting">Copywriting</option>
                        <option value="Design Assistito">Design Assistito</option>
                    </select>

                    <input type="text" />
                </form>

                {/* Elenco delle IA */}
                <ul>
                    {filteredAI.map((curList) => (
                        <li key={curList.id}>{curList.title}</li>
                    ))}
                </ul>

            </main>
        </>
    )
}

export default ListaIA