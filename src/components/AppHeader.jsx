import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import BurgerMenu from './BurgerMenu';

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
        title: "+IA",
        url: "/aggiungiia"
    }]



    return (
        <header>    
                <div className="logo-container">
                    <Link to={"/"}><h2 className="logo"><i className="fa-solid fa-brain"></i></h2></Link>
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
                    <BurgerMenu links={linkNav}/>
                </nav>
        </header>
    );
};

export default AppHeader;