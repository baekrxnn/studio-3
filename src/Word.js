import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
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
        let promptWord = Math.floor(Math.random()*colors.length);
        this.setState ({
            color: colors[promptColor],
            wording: colors[promptColor],
        })
        
    }
    
    render() {
        // this.question();
        return (
            <div>
                <h1 style={{color:this.state.color}}>{this.state.wording}</h1>
                <h2>Type the {this.state.prompt}!</h2>
                <InputBox prompt={this.state.prompt} color={this.state.color} word={this.state.wording}/>
            </div>
            
        );
    }
}