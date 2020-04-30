import React, { Component } from 'react';

export default class ImportBox extends Component{
    constructor() {
      super();
      this.state = {
          val: "hi"
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
    
    answerCheck = (value) => {
        console.log(this.state.val);
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
    }
    
    render() {
        return (
          <div className="box">
              <h1> Type the word/color </h1>
              <input placeholder="your answer here"></input>
              <button val={this.state.val} onClick={this.answerCheck()}> submit </button>
          </div>
        )
    }
}