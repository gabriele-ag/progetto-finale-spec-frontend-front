import { NavLink } from 'react-router-dom';

// CSS
import "./CSS/AppHeader.css"

const AppHeader = () => {
    const linkNav = [
    {
        title: "Home",
        url: "/"
    }, 
    {
        title: "Lista delle IA",
        url: "/listaia"
    },
    {
        title: "Preferiti",
        url: "/preferiti"
    },
    {
        title: "Confronta!",
        url: "/confronto"
    }]



    return (
        <header>
            
            <div>
                <h2 className="logo">Logo</h2>
            </div>

            {/* Barra di navigazione */}
            <nav>               
                <ul className="flex-nav-header">
                    {linkNav.map((curLink, index) => (
                        <li key={index}>
                            <NavLink className="navlink" to={curLink.url}>{curLink.title}</NavLink>
                        </li>
                    ))}
                </ul>  
            </nav>
        </header>
    );
};

export default AppHeader;