import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
    
    render() {
        console.log("");
        return (
            <div>
                <h1 style={{color:this.props.color}} id="theWord">{this.props.word}</h1>
                <h2>Type the {this.props.prompt}!</h2>
            </div>
            
        );
    }
}