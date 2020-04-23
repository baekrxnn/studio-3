import React, { Component } from 'react';
import './App.css';

export default class Word extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            color: "black"
        }
    }
    
    render() {
        return (
            <h1>the word</h1>
        );
    }
}