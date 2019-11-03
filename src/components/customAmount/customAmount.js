import React, { Component } from 'react';
import './customAmount.scss';
import { connect } from 'react-redux';

class CustomAmount extends Component {

    // handleClick sends the pressed digit to be added to custom amount to withdraw/deposit
    handleClick = (val) => {
            this.props.changeAmount(val) 
    }

    // changeMenu changes displayed component from the one to enter custom amount to either withdraw or deposit one
    // it also handles displaying messages on the screen of the withdraw/deposit component.
    changeMenu = (menu) => {
        this.props.changeOperation(menu)
        if (this.props.customAmount%20 !== 0 && this.props.customAmount%50 !== 0) {
            this.props.changeText("Please enter the amount in multiples of 20 or 50")
            this.props.changeText("Amount have to multiply by 20 or 50")
        } else if ((this.props.customAmount*100 > this.props.balance) && this.props.operation === 4){
            this.props.changeText("Insufficient funds")
        } else if (this.props.operation === 4) {
            this.props.changeText("Deducted " + this.props.customAmount + " PLN")
        } else if (this.props.operation === 5) {
            this.props.changeText("Added " + this.props.customAmount + " PLN")
        }
    }
    
    // changeBalance is changing the amount that is in user account
    // it also prevents user from withdrawing more money than he/she has and it prevents of withdrawing and depositing amounts that are not multiply by 20 or 50
    changeBalance = (customAmount) => {
        console.log(this.props.customAmount + ' ' +this.props.balance)
        if (this.props.operation === 4 && parseInt(this.props.customAmount*100) > this.props.balance){
            console.log('Amount must be a multiple of 20 or 50')
        } else if (this.props.customAmount%20 !== 0 && this.props.customAmount%50 !== 0) {
            console.log('')
        } else if (this.props.operation === 4){
            this.props.changeBalance(-customAmount*100)
        } else if (this.props.operation === 5){
            this.props.changeBalance(customAmount*100)
        }
    }
    // deleteCustomAmount cleans the custom amount that user wanted to withdraw/deposit
    deleteCustomAmount = () => {
        this.props.deleteCustomAmount()
    }

    //deleteCustomAmountLastDigit lets user delete last entered digit so that he/she can correct the custom amount to withdraw or deposit
    deleteCustomAmountLastDigit = () => {
        this.props.deleteCustomAmountLastDigit()
    }

    render() { 
        return ( 
            <div>
                <div className="custom-amount">
                <h2>Please enter custom amount</h2>
                <p>{parseInt(this.props.customAmount)}</p>
                </div>
                <div className="buttons">
                    <div className="buttons-row">
                        <button onClick={() => this.handleClick("7")}>7</button>
                        <button onClick={() => this.handleClick("8")}>8</button>
                        <button onClick={() => this.handleClick("9")}>9</button>
                    </div>
                    <div className="buttons-row">
                        <button onClick={() => this.handleClick("4")}>4</button>
                        <button onClick={() => this.handleClick("5")}>5</button>
                        <button onClick={() => this.handleClick("6")}>6</button>
                    </div>
                    <div className="buttons-row">
                        <button onClick={() => this.handleClick("1")}>1</button>
                        <button onClick={() => this.handleClick("2")}>2</button>
                        <button onClick={() => this.handleClick("3")}>3</button>
                    </div>
                    <div className="buttons-row">
                        <button onClick={() => this.handleClick("0")}>0</button>
                        <button onClick={() => this.deleteCustomAmountLastDigit()} className = "back-button">Correct</button>
                        <button onClick={() => this.deleteCustomAmount()} className = "delete-button">Cancel</button>
                    </div>
                    <div className="buttons-row">
                        {/* depends if user is depositing or withdrawing money the accept button will transfer him/her to proper component after accepting the custom amount*/}
                        <button className = "accept-button" onClick={() => {this.changeBalance(this.props.customAmount);this.changeMenu(this.props.operation-3)}
                        }>Accept</button>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        customAmount: state.customAmount,
        operation: state.operation,
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAmount: (val) => { dispatch({ type: "ADD_CUSTOM_AMOUNT", val}) },
        changeBalance: (amount) => { dispatch({type: "CHANGE_BALANCE", amount}) },
        changeOperation: (operation) => { dispatch({type: "CHANGE_OPERATION", operation}) },
        deleteCustomAmount: () => { dispatch ({ type: 'DELETE_CUSTOM_AMOUNT'})},
        deleteCustomAmountLastDigit: () => { dispatch ({ type: 'DELETE_CUSTOM_AMOUNT_LAST_DIGIT'})},
        changeText: (text) => {dispatch ({ type: "FUNDS_INFO", text})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAmount);