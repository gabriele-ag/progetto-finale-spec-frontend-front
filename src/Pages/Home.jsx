import { Link } from "react-router-dom"

import "./CSS/Home.css"

const Home = () => {
    return (        
        <section className="home-section">
            <div className="home-flex">
                <div>
                    <h1 className="home-title">Benvenuto nell'AI Compare</h1>
                    <p className="home-subtitle">Semplice.Veloce.Affidabile</p>
                    <Link className="home-btn">Prova ora!</Link>
                </div>
            </div>
        </section>        
    )
}

export default Home