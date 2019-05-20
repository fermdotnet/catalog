import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getHistory} from '../requests/user';
import PageHeader from '../components/pageHeader';
import ItemProduct from '../components/itemProduct';

class MyProfile extends Component {
    state = {
        history: [],
        loading: true
    };

    componentDidMount(){
        getHistory().then(products => {
            this.setState({history: products, loading: false});
        });
    }

    render(){
        return (
            <div className="my-profile-page">

                <PageHeader title='Mi perfil' />

                <div className="page-content">
                    {
                        this.state.history.map((item, index) => {
                            return (
                                <ItemProduct key={index} data={item} redeem={false} />
                            );
                        })
                    }

                    {this.state.loading === true && (
                        <div>Loading..</div>
                    )}

                    {this.state.loading === false && this.state.history.length === 0 && (
                        <div>Nothing to show.</div>
                    )}
                </div>

            </div>
        );
    }
}

export default connect()(MyProfile);