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
            <div className="app">
                <Timer/>
                <Word ref={this.child}/>
                {/*<InputBox prompt={this.state.prompt} color={this.state.color} wording={this.state.wording}/>*/}
                <h5>Read about the <a href="https://dictionary.apa.org/stroop-effect" target="_blank">Stroop Effect</a>, the science behind this game</h5>
            </div>
        );
    }
}

