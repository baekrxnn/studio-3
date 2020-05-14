import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox.js';
import Word from './Word.js';

export default class App extends Component {
    constructor() {
        super();
        this.child= React.createRef();
    }
    
    render() {
        return (
          <div className="app">
              <h1>hi!</h1>
              <Word ref={this.child}/>
              {/*<InputBox prompt={this.state.prompt} color={this.state.color} wording={this.state.wording}/>*/}
          </div>
        );
    }
}

