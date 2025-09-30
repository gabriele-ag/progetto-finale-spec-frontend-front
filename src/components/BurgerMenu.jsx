import { useState } from "react"
import { NavLink } from "react-router-dom"

import "./CSS/BurgerMenu.css"

const BurgerMenu = ({links}) => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className="burger-container">
                <button className='btn-burger' onClick={() => setOpenMenu(!openMenu)}><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>

            <div className={ `burger-nav ${openMenu ? "open" : "" }`}>
                <ul>
                    {links.map((curLink, index) => (
                        <li key={index}>
                            <NavLink 
                            className="burger-link" 
                            to={curLink.url} 
                            onClick={() => setOpenMenu(false)}>
                                {curLink.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BurgerMenu