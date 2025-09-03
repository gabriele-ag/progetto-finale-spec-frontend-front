import { Link } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


import "./CSS/CardAI.css"

const cardAI = ({title, subtitle, details, toggle, addRemCompare, id}) => {
    const {favorites, addToFavorites, removeFromFavorites} = useContext(GlobalContext)

    const isFavorite = favorites.some((curFav) => curFav.id === id)

    const toggleFavorite = () => {
    const aiData = { id, title, category: subtitle };
    isFavorite ? removeFromFavorites(aiData) : addToFavorites(aiData);
  };

    return (
        <>
        <div className="card-ai">            
            <h1 className="card-title">{title}</h1>
            <h3 className="card-subtitle">Pensato per: {subtitle}</h3>
            <Link 
            className="btn-details"
            to={`/listaia/${details}`}
            >Vedi dettagli</Link>
            <button className="btn-compare" onClick={toggle}>{addRemCompare}</button>                                       
            <button className="btn-fav" onClick={toggleFavorite}>{isFavorite ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }</button>
                                    
        </div>
        </>
    )
}

export default cardAI