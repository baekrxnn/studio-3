import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox.js';
import Word from './Word.js';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            prompt: "color",
            color: "blue",
            wording: "green",
        }
    }

    question = () => {
        let colors = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "black"
        ];

        let promptColor = Math.floor(Math.random()*colors.length);
        // let promptWord = Math.floor(Math.random()*colors.length);
        this.setState ({
            color: colors[promptColor],
            wording: colors[promptColor],
            index: this.state.index++,
        })
    }
    
    render() {
        return (
          <div>
              <h1>hi!</h1>
              <Word prompt={this.state.prompt} color={this.state.color} wording={this.state.wording}/>
              <InputBox prompt={this.state.prompt} color={this.state.color} word={this.state.wording}/>
          </div>
        );
    }
}

