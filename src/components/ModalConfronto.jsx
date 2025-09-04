import "./CSS/ModalConfronto.css"
import { Link } from "react-router-dom"

const ModalConfronto = ({isOpen, onClose, items}) => {

    // È aperto?
    if(!isOpen) return null

    // Creo un massimo di oggetti comparabili
    const maxItemsComparable = items.slice(0, 3)

    // Rating da numerico trasformato in icone
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
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-btn-close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
                <h3 className="modal-title">Compara IA</h3>
                <div className="modal-ai">
                    {maxItemsComparable.map((curItem) =>(
                        <div key={curItem.id}>
                            <img className="modal-ailogo" src={curItem.logoUrl} alt="" />
                            <h2 className="modal-ai-title">{curItem.title}</h2>
                            <p className="modal-rating">Voto: {ratingIcon(curItem.rating)}</p>
                            <p className="modal-margin">Pensato per: {curItem.category}</p>
                            <p className="modal-margin">Cosa fa ? {curItem.description}</p>
                            <p className="modal-margin">Utile per: {curItem.useCases.join(" ")}</p>
                            <p className="modal-margin">Integrato in: {curItem.integrations.join(", ")}</p>
                            <p className="modal-margin">Anno di rilascio: {curItem.releaseYear}</p>
                            <p className="modal-margin">Prezzo: {curItem.price}</p>
                            <p className="modal-margin">Piattaforme supportate: {curItem.platforms.join(" ")}</p>
                            <p className="modal-margin">Livello di privacy: {curItem.privacyLevel}</p>
                            <p className="modal-margin">È gratuito? {curItem.hasFreeVersion === true ? "Sì" : "No"}</p>
                            <p className="modal-margin">Lingue supportate: {curItem.supportedLanguages.join(" ")}</p>
                            <p className="modal-margin">API disponibile: {curItem.apiAvailable === true ? "Sì" : "No"}</p>
                            <Link className="modal-link-website" to={curItem.website}>Sito web: {curItem.website}</Link>                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalConfronto