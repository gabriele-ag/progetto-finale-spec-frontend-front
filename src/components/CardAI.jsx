import { Link } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


import "./CSS/CardAI.css"

const cardAI = ({title, subtitle, details, toggle, addRemCompare, disabledCompare, onDelete, onEdit, id}) => {
    
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
            <div className="card-btn-box">
                <Link 
                className="btn-details"
                to={`/listaia/${details}`}
                >Vedi dettagli</Link>
                
                <button className={`btn-compare ${disabledCompare ? 'disabled' : ''}`} onClick={toggle} disabled={disabledCompare}>{addRemCompare}</button>
                <div className="card-btn-box2">
                    <button className="btn-fav" onClick={toggleFavorite}>{isFavorite ? <i className="fa-solid fa-star btn-fav-empty"></i> : <i className="fa-regular fa-star btn-fav-full"></i> }</button>
                    <button className="btn-delete" onClick={onDelete}><i className="fa-solid fa-trash"></i></button>
                    <button className="btn-edit" onClick={onEdit}><i className="fa-solid fa-pencil"></i></button>
                </div>

            </div>
            <div className="card-separator"></div>
                                    
        </div>
        </>
    )
}

export default cardAI