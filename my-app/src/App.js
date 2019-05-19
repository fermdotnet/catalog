import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';

import MyProfile from './pages/myProfile';
import Catalog from './pages/catalog';
import Product from './pages/product';

export default function App() {
    return (
        <Router>
            <Header />

            <section>
                <Route exact path="/" component={Catalog} />
                <Route path="/my-profile" component={MyProfile} />
                <Route path="/product/:id" component={Product} />
            </section>

            <Footer />
        </Router>
    );
}
