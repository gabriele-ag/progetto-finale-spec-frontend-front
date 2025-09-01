import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useContext, useEffect } from "react"

import { useParams, Link } from "react-router-dom"

const DettagliIA = () => {

    const { id } = useParams()
    const { getSingleAI } = useContext(GlobalContext)

    const [singleAI, setSingleAI] = useState(null)

    useEffect(() => {
        const fetchAIdata = async () => {
            const data = await getSingleAI(id)
            setSingleAI(data)
        }

        fetchAIdata()
    }, [id, getSingleAI])

    return (
        <main>
            {!singleAI ? (
                <p>Caricamento...</p>
            ) : (
                <div>
                    <img src={singleAI.logoUrl} alt="logo della AI" />
                    <h2>{singleAI.title}</h2>
                    <h4>{singleAI.brand}</h4>
                    <p>{singleAI.description}</p>
                    <p>Costo: {singleAI.price}</p>
                    <p>Anno di rilascio: {singleAI.releaseYear}</p>
                    <p>Linguaggi supportati: {singleAI.supportedLanguages}</p>
                    <p>Per cosa viene usato ?</p>
                    <p>{singleAI.useCases}</p>
                    <p>Livello di privacy: {singleAI.privacyLevel}</p>
                    <p>Rating: {singleAI.rating}</p>
                    <Link to={singleAI.website}>{singleAI.website}</Link>
                </div>
            )}
        </main>
    )
}

export default DettagliIA