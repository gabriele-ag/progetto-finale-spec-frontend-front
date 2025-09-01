import { Link } from "react-router-dom"

const cardAI = ({title, subtitle, details}) => {
    return (
        <>
        <div className="card-ai">
            <div>
                <h1 className="card-title">{title}</h1>
                <h3 className="card-subtitle">Pensato per: {subtitle}</h3>
                <Link 
                className="card-btn"
                to={`/listaia/${details}`}
                >Vedi dettagli</Link>
            </div>
        </div>
        </>
    )
}

export default cardAI