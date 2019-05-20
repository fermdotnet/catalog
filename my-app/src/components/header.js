import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component {

    render(){
        return (
            <header>

                <Link to="/">
                    <img src="/assets/images/aerolab.svg" alt="aerolab" />
                </Link>

                {this.props.userData && (
                    <Link className="my-profile" to="/my-profile">
                        <span className="name">{this.props.userData.name}</span>
                        <div className="points">{this.props.userData.points}</div>
                    </Link>
                )}

            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    };
};

export default connect(mapStateToProps)(Header);