import React, {Component} from "react";
import { connect } from 'react-redux';
import { render } from 'react-dom';
import ReactSVG from 'react-svg';
import {fetchLoadUser} from '../requests/user';
import {redeem, fetchLoadProducts} from '../requests/products';

class ItemProduct extends Component {
    state = {
        redeem: false
    };

    constructor(props){
        super(props);
    }

    onToggle = () => {
        this.setState({
            redeem: !this.state.redeem
        });
    };

    onRedeem(id){
        if(window.confirm('Are you really sure you want to redeem this product?')){
            redeem(id).then((res) => {
                alert(res.message);

                this.props.dispatch(fetchLoadUser());
                this.props.dispatch(fetchLoadProducts());

                this.setState({redeem: false});
            });
        }
    }

    render(){
        return (
            <article className={
                this.state.redeem ? 'item-product to-redeem' : 'item-product'
            }>

                {this.props.redeem === true && this.props.userData.points >= this.props.data.cost && (
                    <ReactSVG src="/assets/images/buy.svg" className="redeem-icon" onClick={this.onToggle} />
                )}

                {this.props.redeem === true && this.props.userData.points >= this.props.data.cost && (
                    <div className="redeem">
                        <div className="coin">{this.props.data.cost}</div>
                        <button onClick={() => { this.onRedeem(this.props.data._id) }}>Redeem now</button>
                    </div>
                )}

                {this.props.redeem === true && this.props.userData.points < this.props.data.cost && (
                    <div className="you-need">You need {this.props.data.cost - this.props.userData.points}</div>
                )}

                <img src={this.props.data.img.url} alt={this.props.data.name} />

                <div className="info">
                    <div className="category">{this.props.data.category}</div>
                    <div className="name">{this.props.data.name}</div>
                </div>

            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    };
};

export default connect(mapStateToProps)(ItemProduct);