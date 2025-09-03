import { useContext } from "react"
import useList from "../hook/useList"
import { GlobalContext } from "../contexts/GlobalContext"
import { Link } from "react-router-dom"

import "./CSS/Preferiti.css"


const Preferiti = () => {

    const { favorites, removeFromFavorites } = useContext(GlobalContext);

    return (
        <main>
            <div className="container">
                <h2 className="fav-title">I tuoi preferiti <i className="fa-solid fa-star fav-star"></i></h2>
                {favorites.length === 0 ? (
                    <>
                        <p className="fav-none">Oh no! Non ci sono ancora preferiti nella tua lista! </p>
                        <Link to={"/listaia"} className="fav-btn-list">Vai alla lista</Link>
                        <i class="fa-solid fa-arrow-left"></i>
                    </>
                ) : (
                    <ul>
                        {favorites.map((curElem, index) => (
                            <div className="fav-flex-box">
                                <li key={index}>
                                    <h3>{curElem.title}</h3>
                                    <p className="fav-category">{curElem.category}</p>
                                </li>
                                <div>
                                    <button className="fav-btn-details">Vedi dettagli</button>
                                    <button className="fav-btn-erase" onClick={() => removeFromFavorites(curElem)}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}

export default Preferiti