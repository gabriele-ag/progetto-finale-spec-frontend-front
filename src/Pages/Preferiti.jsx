import { useContext } from "react"
import useList from "../hook/useList"
import { GlobalContext } from "../contexts/GlobalContext"

const Preferiti = () => {

    const { favorites, removeFromFavorites } = useContext(GlobalContext);

    return (
        <main>
            <div className="container">
                <h2>I tuoi preferiti</h2>
                {favorites.length === 0 ? (
                    <p>Nessun elemento nei preferiti</p>
                ) : (
                    <ul>
                        {favorites.map((curElem, index) => (
                            <li key={index}>{curElem.title}
                            <button onClick={() => removeFromFavorites(curElem)}>
                                Rimuovi dai preferiti
                            </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}

export default Preferiti