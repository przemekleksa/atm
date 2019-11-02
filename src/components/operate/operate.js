import React, { Component } from 'react';
import './operate.scss';
import { connect } from 'react-redux';

class Operate extends Component {
//     state = { 
//         balance: (this.props.balance/100).toFixed(2),
//         operation: this.props.operation
//      }
//    static getDerivedStateFromProps(props, state) {
//        if (props.operation !== state.operation) {
//            return {
//                 operation: props.operation
//            }
//        }
//    }
//    static getDerivedStateFromProps(props, state) {
//        if (props.operation !== state.operation) {
//            return {
//                 operation: props.operation
//            }
//        }
//    }
    backToMenu = () => {
        this.props.changeOperation(0)
        this.props.changeText("")
    }

    changeBalance = (amount) => {
        if (this.props.operation === 1 && this.props.balance < (amount*100)){
            // this.changeFundsInfo()
            this.props.changeText("Insufficient funds")
        } else if (this.props.operation === 1 && amount){
            // console.log("w")
            this.props.changeBalance(-amount*100)
        } else if (this.props.operation === 2) {
            // console.log("D")
            this.props.changeBalance(amount*100)
        }
    }
    // changeFundsInfo = (amount) => {
    //     if (this.props.balance < (amount*100)){
    //         console.log("za malo hajsu")
    //     }
    // }

    render() { 
        console.log(this.props)
        return ( 
            <div className="operation">
                <div className="operation-box">
                        <div className="operation-type">
                            <h2>{this.props.operation === 1 ? "Withdraw" : this.props.operation === 2 ? "Deposit" : ""}</h2>
                        </div>
                        <div className="balance-info">
                            {this.props.fundsInfo}
                        </div>
                        <div className="show-balance">
                            <h2>Balance</h2>
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
                        <button className="amount">
                        Other 
                        </button>
                    </div>
                </div>
                <button onClick={() => this.backToMenu()}>
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
        changeText: (text) => {dispatch ({ type: "FUNDS_INFO", text})}
        // fundsInfo: (text) => { dispatch({type: "FUNDS_INFO", text}) }
        // fundsInfo: (text) => { dispatch({type:'FUNDS_INFO', text}) } 
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Operate);