import React, { Component } from 'react';
import './pinPad.scss';
import { connect } from 'react-redux';

class PinPad extends Component {
    // state = { 
    //     val1: null,
    //     val2: null,
    //     val3: null,
    //     val4: null,
    // }

    // handleClick = (val) => {
    //     if (val === "delete"){
    //         this.setState({
    //             val1: null,
    //             val2: null,
    //             val3: null,
    //             val4: null,
    //         }); 
    //     } else if (!this.state.val1) {
    //         if (val === "back") {
    //             this.setState({
    //                 val1: null,
    //             });
    //         } else
    //         this.setState({
    //             val1: val,
    //         });
    //     } else if (!this.state.val2) {
    //         if (val === "back") {
    //             this.setState({
    //                 val1: null,
    //             });
    //         } else
    //         this.setState({
    //             val2: val,
    //         }); 
    //     } else if (!this.state.val3) {
    //         if (val === "back") {
    //             this.setState({
    //                 val2: null,
    //             });
    //         } else
    //         this.setState({
    //             val3: val,
    //         }); 
    //     } else if (!this.state.val4) {
    //         if (val === "back") {
    //             this.setState({
    //                 val3: null,
    //             });
    //         } else
    //         this.setState({
    //             val4: val,
    //         }); 
    //     } else if (val === "back") {
    //             this.setState({
    //                 val4: null,
    //             });
    //     } else if (this.state.val4) {
    //     }
    // }

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
                {console.log(this.props.val)}
                    {this.props.val.length<1 ? "enter pin" : this.props.val}
                    {/* {this.props.val[1]}
                    {this.props.val[2]}
                    {this.props.val[3]} */}
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