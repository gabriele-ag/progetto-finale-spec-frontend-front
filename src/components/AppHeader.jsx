import { NavLink } from 'react-router-dom';

const AppHeader = () => {
    const linkNav = [
    {
        title: "Home",
        url: "/"
    }, 
    {
        title: "Lista delle IA",
        url: "/listaia"
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