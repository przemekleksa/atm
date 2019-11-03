import React, { Component } from 'react';
import './pinPad.scss';
import { connect } from 'react-redux';

class PinPad extends Component {

    // handleClick is responsible for adding, removing and clearing PIN digits, as well as accepting entered PIN to validate it
    handleClick = (val) => {
        if (val === "delete"){
            this.props.deleteCode()
        } else if (val === "back"){
            this.props.deleteDigit()
        } else if (val === "accept"){
            this.props.checkCode()
        } else if (!this.props.val[0]) {
            this.props.changeCode(val)
        } else if (!this.props.val[1]) {
            this.props.changeCode(val)
        } else if (!this.props.val[2]) {
            this.props.changeCode(val)
        } else if (!this.props.val[3]) {
            this.props.changeCode(val)
        }
    }

    render() { 
        return ( 
            <div>
                <div className="screen">
                    <h2>{this.props.val.length<1 ? "Enter PIN" : this.props.val}</h2>
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
                        <button onClick={() => this.handleClick("back")} className = "back-button">Correct</button>
                        <button onClick={() => this.handleClick("delete")} className = "delete-button">Cancel</button>
                    </div>
                    <div className="buttons-row">
                        <button className = "accept-button" onClick={() => this.handleClick("accept")}>Accept</button>
                    </div>
                </div>
              
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        val: state.val,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeCode: (digit) => {
            dispatch({
                type: 'CHANGE_DIGIT',
                digit
            })
        },
        deleteCode: () => {
            dispatch ({
                type: 'DELETE_PINCODE'
            })
        },
        deleteDigit: () => {
            dispatch ({
                type: 'DELETE_DIGIT'
            })
        },
        checkCode: () => {
            dispatch ({
                type: 'CHECK_CODE'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinPad);