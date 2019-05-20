import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from '../components/pageHeader';

class Product extends Component {

    render(){
        return (
            <div className="product-page">

                <PageHeader title='Producto' />

                <div className="page-content">
                    Producto ...
                </div>

            </div>
        );
    }
}

export default connect()(Product);