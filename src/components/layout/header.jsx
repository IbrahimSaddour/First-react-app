import React from 'react'

import "../../styles/header.css"   //import stylesheet for header
import logo from "../../assets/imgs/3waLogo.png"


export default function Header() {
    // let nameSite="3WAcademy"
    return (
        <div>
            <nav className="navbar">
                <div className='navbar_logo_container'>
                    <img className="navbar_logo" src={logo} alt="3wa Logo" />
                </div>
                <div className="navbar_list">
                    <ul>
                        <li>Métiers</li>
                        <li>Technologie</li>
                        <li>Entreprise</li>
                        <li>Notre Academy</li>
                        <li>Villes</li>
                        <li><a href="#">CVthèque</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
