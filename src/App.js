import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox.js';
import Word from './Word.js';

export default class App extends Component {
    render() {
        return (
          <div>
              <h1>hi!</h1>
              <Word />
              <InputBox />
          </div>
        );
    }
}

