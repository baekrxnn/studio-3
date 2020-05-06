import React, { Component } from 'react';

export default class ImportBox extends Component{
    constructor() {
      super();
      this.state = {
          index: 0,
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
    
    answerCheck = (event) => {
        //this.setState({index: this.state.index+1});
        console.log("stan loona");
        console.log(this.state.index);
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("submitted")
    }
    
    render() {
        return (
          <div className="box">
              <h1> Type the word/color </h1>
              <form onSubmit={this.handleSubmit()}>
                  <label>hi
                      <input placeholder="your answer here" type="text" onChange={this.answerCheck()}></input>
                  </label>
                {/*<input type="submit" value="Submit" />*/}
                  <button onClick={this.handleSubmit}>submit</button>
              </form>
            {/*<button val={this.state.val} onClick={this.answerCheck()} key={this.state.index}> submit </button>*/}
          </div>
        )
    }
}