import { Link } from "react-router-dom"

import "./CSS/Home.css"

const Home = () => {
    return (
        <main>       
            <section className="home-section">
                <div className="home-flex">
                    <div className="container home-box">
                        <h1 className="home-title">Confronta IA</h1>
                        <h3 className="home-subtitle">Semplice / Veloce / Affidabile</h3>
                        <p className="description-home">Sfoglia il nostro catalogo, sempre aggiornato, sulle intelligenze artificiali più usate. <br /> Che si tratti di semplice ricerca o di editing video, troverai ciò che stai cercando!</p>
                        <div className="btn-flex">
                            <Link to={`/listaia`} className="home-btn">Sfoglia il catalogo!</Link>
                        </div>
                        <div className="home-arrow">
                            <i class="fa-solid fa-arrow-up arrow-animation"></i>
                        </div>
                    </div>
                </div>
            </section>  
        </main>       
    )
}

export default Home