import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import Header from './components/header';
import Footer from './components/footer';

import MyProfile from './pages/myProfile';
import Catalog from './pages/catalog';
import Product from './pages/product';

import {fetchLoadUser} from './requests/user';
import {fetchLoadProducts} from './requests/products';

class App extends Component {

    componentDidMount() {
        store.dispatch(fetchLoadUser());
        store.dispatch(fetchLoadProducts());
    }

    render(){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <Header />

                        <section>
                            <Route exact path="/" component={Catalog} />
                            <Route path="/my-profile" component={MyProfile} />
                            <Route path="/product/:id" component={Product} />
                        </section>

                        <Footer />
                    </Router>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
