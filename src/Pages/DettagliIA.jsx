import { GlobalContext } from "../contexts/GlobalContext"
import { useState, useContext, useEffect } from "react"

import { useParams, Link } from "react-router-dom"

import "./CSS/Dettagli.css"

const DettagliIA = () => {

    const {id} = useParams()
    const { getSingleAI } = useContext(GlobalContext)

    const [singleAI, setSingleAI] = useState(null)

    useEffect(() => {
        const fetchAIdata = async () => {
            const data = await getSingleAI(id)
            setSingleAI(data)
        }

        fetchAIdata()
    }, [id, getSingleAI])

    const ratingIcon = (rating) => {
        const icons = []
        const fullIcon = Math.floor(rating)
        const halfIcon = rating % 1 >= 0.5
        const emptyIcon = 5 - fullIcon - (halfIcon ? 1 : 0)

        for (let i = 0; i < fullIcon; i++) {
            icons.push(<i className="fa-solid fa-star"></i>)
        }

        if (halfIcon) {
            icons.push(<i className="fa-solid fa-star-half-stroke"></i>)
        }

        for (let i = 0; i < emptyIcon; i++) {
            icons.push(<i className="fa-regular fa-star"></i>)
        }

        return icons
    }

    return (
        <main>
            {!singleAI ? (
                <p>Caricamento...</p>
            ) : (
                <>
                {/* Sezione logo e rating */}
                <section className="section-logo-title">
                    <div className="container details-flex-title">
                        <img className="details-logo" src={singleAI.logoUrl} alt="logo della AI" />
                        <h2 className="details-title">{singleAI.title}</h2>
                    </div>
                    <div className="container details-rating">
                        <p>Rating: {ratingIcon(singleAI.rating)}</p>
                    </div>
                </section>

                {/* Sezione sito web */}
                <section className="details-website-section">
                    <p>Sito web:</p>
                    <Link className="link-website" to={singleAI.website}>{singleAI.website}</Link>
                </section>

                <section>
                    <div className="section-details container">
                        <div>
                            <i className="fa-regular fa-pen-to-square icon-custom"></i>
                            <h3 className="details-title-info">Cosa fa?</h3>    
                            <p className="details-description">{singleAI.description}</p>
                        </div>
                        <div className="flex-box-details">
                            <i class="fa-solid fa-layer-group icon-custom"></i>
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
                        <div>
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
                            <p className="details-description">Linguaggi supportati: {singleAI.supportedLanguages}</p>
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