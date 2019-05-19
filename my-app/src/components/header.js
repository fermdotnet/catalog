import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>

            <Link to="/">
                <img src="/assets/images/aerolab.svg" />
            </Link>

            <Link className="my-profile" to="/my-profile">
                <span className="name">John Kite</span>
                <div className="points">6000</div>
            </Link>

        </header>
    );
}