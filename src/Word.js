import React, { Component } from 'react';
import './App.css';

export default class Word extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            color: "blue"
        }
    }
    
    render() {
        return (
            <h1 style={{color:this.state.color}}>the word</h1>
        );
    }
}