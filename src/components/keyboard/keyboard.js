import React, { Component } from 'react';
import './keyboard.scss'

class Keyboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className="screen">
                    {this.state.val1 === null ? "enter pin" : this.state.val1}
                    {this.state.val2}
                    {this.state.val3}
                    {this.state.val4}
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
                        <button className = "accept-button" href='./App.js'>Accept</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Keyboard;