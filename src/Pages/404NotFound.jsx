import { Link } from "react-router-dom"
import "./CSS/404NotFound.css"

const NotFound = () => {
    return (
        <>
            <div className="container">
                <h1>Ti sei perso? </h1>
                <p>La pagina che stai cercando non esiste</p>
                <Link to={"/"}>Torna alla Home</Link>
            </div>
        </>
    )
}

export default NotFound