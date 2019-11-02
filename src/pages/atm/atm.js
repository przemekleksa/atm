import React, { Component } from 'react';
import Menu from '../../components/menu/menu';
import PinPad from '../../components/pinPad/pinPad';
import './atm.scss';
import { connect } from 'react-redux';
import Operate from '../../components/operate/operate';
import Cancel from '../../components/cancel/cancel';
// import Operate from '../../components/operate';

class Atm extends Component {
    render() { 
        return ( 
            <div className="atm">
                <div className="atm-menu">
                    {!this.props.authenticated ? <PinPad /> :
                    this.props.operation === 0 ? <Menu /> : 
                    this.props.operation === 3 ? <Cancel/> : <Operate/>}
                    {/* {!this.props.authenticated ? <PinPad /> :
                    this.props.operation === 0 ? <Menu /> : <Operate />} */}
                    {/* {!this.props.authenticated ? <PinPad /> : ""}
                    {this.props.operation === 0 ? <Menu /> : <Operate />} */}
                    
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