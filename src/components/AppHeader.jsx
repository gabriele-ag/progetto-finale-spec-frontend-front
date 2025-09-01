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

            {/* Barra di navigazione */}
            <nav>
                <ul>
                    {linkNav.map((curLink, index) => (
                        <li key={index}>
                            <NavLink to={curLink.url}>{curLink.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;