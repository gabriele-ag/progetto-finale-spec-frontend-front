import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Link } from "react-router-dom"

import "./CSS/Preferiti.css"


const Preferiti = () => {

    const { favorites, removeFromFavorites } = useContext(GlobalContext);

    return (
        <section className="fav-section">
            <div className="container">
                <h2 className="fav-title">I tuoi preferiti <i className="fa-solid fa-star fav-star"></i></h2>
                {favorites.length === 0 ? (
                    <>
                        <p className="fav-none">Oh no! Non ci sono ancora preferiti nella tua lista! </p>
                        <Link to={"/listaia"} className="fav-btn-list">Vai alla lista</Link>
                        <i className="fa-solid fa-arrow-left"></i>
                    </>
                ) : (
                    <ul>
                        {favorites.map((curElem, index) => (
                            <div key={index} className="fav-flex-box">
                                <li key={index}>
                                    <h3>{curElem.title}</h3>
                                    <p className="fav-category">{curElem.category}</p>
                                </li>
                                <div>
                                    <Link to={`/listaia/${curElem.id}`} className="fav-btn-details">Vedi dettagli</Link>
                                    <button className="fav-btn-erase" onClick={() => removeFromFavorites(curElem)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Preferiti