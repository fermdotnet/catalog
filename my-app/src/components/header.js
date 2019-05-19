import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>

            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/my-profile">Mi Perfil</Link>
                </li>
            </ul>

        </header>
    );
}