import React, { Component } from 'react';
import './operate.scss';
import { connect } from 'react-redux';

// this component can be use bouth to withdraw and deposit money

class Operate extends Component {

    // changeMenu function lets you go back to main menu
    changeMenu = (menu) => {
        this.props.changeOperation(menu)
        this.props.changeText("")
    }

    // changeBalance lets you add or deduct money to and from the account.
    // if you want to withdraw more money than there is currently on your account this function will prevent you from doing so by displaying proper alert on the screen.
    // it also display message with withdrawed/deposited amount
    changeBalance = (amount) => {
        if (this.props.operation === 1 && this.props.balance < (amount*100)){
            this.props.changeText("Insufficient funds")
        } else if (this.props.operation === 1 && amount){
            this.props.changeBalance(-amount*100)
            this.props.changeText("Deducted "+ amount + " PLN")
        } else if (this.props.operation === 2) {
            this.props.changeBalance(amount*100)
            this.props.changeText("Added "+ amount + " PLN")
        }
    }

    // this one deletes custom amount
    deleteCustomAmount = () => {
        this.props.deleteCustomAmount()
    }
    
    render() { 
        return ( 
            <div className="operation">
                <div className="operation-box">
                        <div className="operation-type">
                            <h2>{this.props.operation === 1 ? "Withdraw" : this.props.operation === 2 ? "Deposit" : ""}</h2>
                        </div>
                        <div className="show-balance">
                            <h2>Balance</h2>
                        </div>
                </div>
                <div className="screen-box">
                        <div className="funds-text">
                           <p>{this.props.fundsInfo}</p> 
                        </div>
                        <div className="balance">
                            <p>{(this.props.balance/100).toFixed(2)} PLN</p>
                        </div>
                </div>
                <div className="amount-select">
                    <div className="amount-row">
                        <button className="amount" onClick={() => this.changeBalance(20)}>
                        20
                        </button>
                        <button className="amount" onClick={() => this.changeBalance(50)}>
                        50
                        </button>
                        <button className="amount" onClick={() => this.changeBalance(100)}>
                        100
                        </button>
                    </div>
                    <div className="amount-row">
                        <button className="amount" onClick={() => this.changeBalance(150)}>
                        150
                        </button>
                        <button className="amount" onClick={() => this.changeBalance(200)}>
                        200
                        </button>
                        <button className="amount" onClick={() => this.changeBalance(300)}>
                        300
                        </button>
                    </div>
                    <div className="amount-row">
                        <button className="amount" onClick={() => this.changeBalance(400)}>
                        400
                        </button>
                        <button className="amount" onClick={() => this.changeBalance(500)}>
                        500
                        </button>
                        <button className="amount" onClick={() => {this.changeMenu(this.props.operation+3); this.deleteCustomAmount()}} >
                        Other 
                        </button>
                    </div>
                </div>
                <button onClick={() => this.changeMenu(0)}>
                    Back
                </button>
            </div>
            
         );
    }
}

const mapStateToProps = (state) => {
    return {
        operation: state.operation,
        balance: state.balance,
        fundsInfo: state.fundsInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeOperation: (operation) => { dispatch({type: "CHANGE_OPERATION", operation}) }, 
        changeBalance: (amount) => { dispatch({type: "CHANGE_BALANCE", amount}) },
        changeText: (text) => {dispatch ({ type: "FUNDS_INFO", text})},
        deleteCustomAmount: () => {dispatch ({ type: 'DELETE_CUSTOM_AMOUNT'})}
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Operate);