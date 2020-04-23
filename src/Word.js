import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
    constructor() {
        super();
        this.state = {
            prompt: "color",
            index: 0,
            color: "blue",
            wording: "green"
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
    }
    
    render() {
        
        return (
            <div>
                <h1 style={{color:this.state.color}}>{this.state.wording}</h1>
                <InputBox />
            </div>
            
        );
    }
}