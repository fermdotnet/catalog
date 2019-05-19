import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyProfile from './pages/myProfile';
import Catalog from './pages/catalog';
import Product from './pages/product';

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/my-profile">Mi Perfil</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Catalog} />
                <Route path="/my-profile" component={MyProfile} />
                <Route path="/product/:id" component={Product} />
            </div>
        </Router>
    );
}
