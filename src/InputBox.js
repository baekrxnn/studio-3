import React, { Component } from 'react';

export default class ImportBox extends Component{
    render() {
        return (
          <div className="box">
              <h1> Type the word/color </h1>
              <input placeholder="your answer here"></input>
              <button> submit </button>
          </div>
        )
    }
}