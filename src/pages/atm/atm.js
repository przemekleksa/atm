import React, { Component } from 'react';
import Menu from '../../components/menu/menu';
import PinPad from '../../components/pinPad/pinPad';
import './atm.scss';
import { connect } from 'react-redux';
import Operate from '../../components/operate/operate';
import Cancel from '../../components/cancel/cancel';
import CustomAmount from '../../components/customAmount/customAmount';

class Atm extends Component {
    render() { 
        return ( 
            <div className="atm">
                <div className="atm-menu">
                {/* My custom routing:
                if authenticated bool is false then you have to enter user PIN on the keyboard. As login is not required in this exercise any 4 digits will pass as PIN
                Components are switching with this.props.operation
                0 - Main menu (withdraw, deposit, cancel operatio)
                1 - withdraw money
                2 - deposit money
                3 - cancel operation and "log out"
                4 - withdraw custom amount of money
                5 - deposit custom amount of money */}
                    {!this.props.authenticated ? <PinPad /> :
                    this.props.operation === 0 ? <Menu /> : 
                    this.props.operation === 3 ? <Cancel/> : 
                    this.props.operation === 4 ? <CustomAmount /> : 
                    this.props.operation === 5 ? <CustomAmount /> :
                    <Operate />}  
                    
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        operation: state.operation,
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps)(Atm);