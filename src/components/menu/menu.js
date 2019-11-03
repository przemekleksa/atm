import React, { Component } from 'react';
import './menu.scss';
import { connect } from 'react-redux';

class Menu extends Component {

    // selectOperation will change the screen depending on user choice
    selectOperation = (val) => {
        this.props.changeOperation(val)
    }

    render() { 
        return ( 
            <div>
                <h1>Select operation</h1>
                <div className="select-operation">
                    <button onClick={() => this.selectOperation(1)}>Withdraw</button>
                    <button onClick={() => this.selectOperation(2)}>Deposit</button>
                </div>
                <div className="cancel-operation">
                    <button onClick={() => this.selectOperation(3)}>Cancel operation</button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        operation: state.operation,
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOperation: (operation) => { dispatch({type: "CHANGE_OPERATION", operation}) } 
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps )(Menu);
