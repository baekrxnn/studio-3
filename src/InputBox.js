import React, { Component } from 'react';

export default class ImportBox extends Component{
    constructor() {
      super();
    }
    
    answerCheck = (value) => {
        let color = this.props.color;
        let word = this.props.word;
        
    }
    
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