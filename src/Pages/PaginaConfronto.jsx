import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"

import CardAI from "../components/CardAI"
import useList from "../hook/useList"

const PaginaConfronto = () => {

    const [searchParams] = useSearchParams()
    const id1 = searchParams.get("id1")
    const id2 = searchParams.get("id2")

    const { getSingleAI } = useList()
    const [selectedAI, setSelectedAI] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAI = async () => {
            try {
                setLoading(true)
                const ai1 = await getSingleAI(id1)
                const ai2 = await getSingleAI(id2)
                setSelectedAI([ai1, ai2])
            } catch(error) {
                throw new Error("Impossibile recuperare i dati:", error)
            } finally {
                setLoading(false)
            }
        }

        if (id1 && id2) {
            fetchAI()
        }

    },[id1, id2, getSingleAI])



    return (
        <section>
            <div>
                <h1 className="confronto-title">Confronta AI</h1>

                {loading ? (
                    <p>Caricamente in corso...</p>
                ) : (
                    <>
                    {selectedAI.length === 2 && (
                        <div className="confronto-box">
                            {selectedAI.map((curElem) => (
                                <CardAI
                                key={curElem.id}
                                title={curElem.title}
                                subtitle={curElem.category}
                                />

                            ))}
                        </div>
                    )}
                    </>
                )}

                <Link to="/listaia">Torna alla lista</Link>
          
            </div>
        </section>
    )
}

export default PaginaConfronto