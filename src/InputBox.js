import React, { Component } from 'react';

export default class ImportBox extends Component{
    constructor() {
      super();
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
    
    answerCheck = (value) => {
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
        if (prompt === "color" ) {
            console.log(color);
        }
    }
    
    render() {
        return (
          <div className="box">
              <h1> Type the word/color </h1>
              <input placeholder="your answer here"></input>
              <button onClick={this.answerCheck()}> submit </button>
          </div>
        )
    }
}