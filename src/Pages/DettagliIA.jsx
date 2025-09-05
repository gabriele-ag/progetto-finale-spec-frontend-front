import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useContext, useEffect } from "react"

import { useParams, Link, useNavigate} from "react-router-dom"

import "./CSS/Dettagli.css"

const DettagliIA = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const { getSingleAI } = useContext(GlobalContext)

    const [singleAI, setSingleAI] = useState(null)

   useEffect(() => {
        const fetchAIdata = async () => {
            const data = await getSingleAI(id)
            if (!data) {
                navigate("/not-found")
            } else {
                setSingleAI(data)
            }
        }

        fetchAIdata()
    }, [id, getSingleAI, navigate])


    const ratingIcon = (rating) => {
        const icons = []
        const fullIcon = Math.floor(rating)
        const halfIcon = rating % 1 >= 0.5
        const emptyIcon = 5 - fullIcon - (halfIcon ? 1 : 0)

        for (let i = 0; i < fullIcon; i++) {
            icons.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>)
        }

        if (halfIcon) {
            icons.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>)
        }

        for (let i = 0; i < emptyIcon; i++) {
            icons.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>)
        }

        return icons
    }

    return (
        <main>
            {singleAI === undefined ? (
                <p className="loading">Caricamento...</p>
            ) : singleAI === null ? (
                <>
                    {/* PENSARE A QUESTA PARTE */}
                    <h3 className="no-ai">L'intelligenza artificiale che stai cercando non esiste.</h3>
                </>
            ) : (
                <>
                {/* Sezione logo e rating */}
                <section className="section-logo-title">
                    <div className="container details-flex-title">
                        <img className="details-logo" src={singleAI.logoUrl} alt="logo della AI" />
                        <h2 className="details-title">{singleAI.title}</h2>
                    </div>
                    <div className="container details-rating">
                        <p>Voto: {ratingIcon(singleAI.rating)}</p>
                    </div>
                </section>

                {/* Sezione sito web */}
                <section className="details-website-section">
                    <p className="site-text">Sito web:</p>
                    <Link className="link-website" to={singleAI.website}>{singleAI.website}</Link>
                </section>

                <section>
                    <div className="section-details container">
                        <div className="flex-box-details">
                            <i className="fa-regular fa-pen-to-square icon-custom"></i>
                            <h3 className="details-title-info">Cosa fa?</h3>    
                            <p className="details-description">{singleAI.description}</p>
                        </div>
                        <div className="flex-box-details">
                            <i className="fa-solid fa-layer-group icon-custom"></i>
                            <h3 className="details-title-info">Piattoforme supportate</h3>    
                            <p className="details-description">{singleAI.platforms.join(", ")}</p>
                        </div>
                        <div className="flex-box-details">
                            <i className="fa-solid fa-gear icon-custom"></i>
                            <h3 className="details-title-info">Integrazioni</h3>    
                            <p className="details-description">{singleAI.integrations.join(", ")}</p>
                        </div>
                    </div>
                </section>

                <section className="section2-background">
                    <div className="section-details container">
                        <div className="flex-box-details">
                            <i className="fa-solid fa-coins icon-custom"></i>
                            <h3 className="details-title-info">Quanto costa?</h3>
                            <p className="details-description">{singleAI.price}</p>
                        </div>
                        <div className="flex-box-details">
                            <i className="fa-regular fa-face-smile icon-custom"></i>
                            <h3 className="details-title-info">Versione gratuita?</h3>
                            <p className="details-description">{singleAI.hasFreeVersion === true ? "Sì" : "No"}</p>
                        </div>
                        <div className="flex-box-details">
                            <i className="fa-solid fa-globe icon-custom"></i>
                            <h3 className="details-title-info">Altre info</h3>
                            <p className="details-description">Linguaggi supportati: {singleAI.supportedLanguages.join(", ")}</p>
                            <p className="details-description">Livello di privacy: {singleAI.privacyLevel}</p>
                        </div>
                    </div>
                </section>

                </>
                )}
        </main>
    )
}

export default DettagliIA