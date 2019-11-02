import React, { Component } from 'react';
import './menu.scss';
import Operate from '../operate/operate';
import { connect } from 'react-redux';

class Menu extends Component {
    // state = { 
    //     operation: 0,
    //     balance: 345500,
    //  }
    
    // selectOperation = (type) => {
    //     this.setState({
    //         operation: type,
    //     })
    // }

    selectOperation = (val) => {
        this.props.changeOperation(val)
    }

    render() { 
        // console.log(this.props)
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
                {/* <Operate /> */}
                {/* <Operate operation={this.props.operation} balance={this.props.balance} /> */}
                {/* {this.state.operation === "withdraw" ? <Withdraw balance={this.state.balance} operation={this.state.operation}/> : this.state.operation === "deposit" ? 
                <Deposit balance={this.state.balance}/> : <div></div>} */}
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
