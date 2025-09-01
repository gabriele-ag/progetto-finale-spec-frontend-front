import { NavLink } from 'react-router-dom';

// CSS
import "./AppHeaderCSS/AppHeader.css"

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
    }]



    return (
        <header>
            
            <div>
                <h2>Logo</h2>
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