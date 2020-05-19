import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox.js';
import Word from './Word.js';
import Timer from './timer.js'

export default class App extends Component {
    constructor() {
        super();
        this.child= React.createRef();
    }
    
    render() {
        return (
            <div>
                <div>
                    <Timer/>
                </div>
                
                <div className="game">
                    <Word ref={this.child}/>
                    {/*<InputBox prompt={this.state.prompt} color={this.state.color} wording={this.state.wording}/>*/}
                    <h5>Learn about the <a href="https://youtu.be/reUic5tyVwo?t=10" target="_blank">Stroop Effect</a>, the science behind this game</h5>
                </div>
                
            </div>
        );
    }
}

