import React, { Component } from 'react';

export default class InputBox extends Component{
    constructor() {
        super();
        this.state = {
            score: 0,
            value: "hi",
            question: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.answerCheck = this.answerCheck.bind(this);
    }
    
    answerCheck = (event) => {
        this.setState({value: event.target.value});
        // console.log(this.state.value);
    }
    
    handleSubmit = (event) => {
        // this.setState({value: event.target.value});
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
        // console.log(prompt + color + word);
        event.preventDefault();
        console.log(this.state.value);
        if (prompt === "color" && this.state.value === color) {
            this.setState({score: this.state.score++});
            console.log(this.state.score);
        } else if (prompt === "word" && this.state.value === word) {
            this.setState({score: this.state.score++});
            console.log(this.state.score);
        }
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
        // console.log("submitted");
    }
    
    render() {
        return (
            <div className="box">
                <input value={this.state.value} onChange={this.answerCheck}></input>
                <button onClick={this.handleSubmit}> click</button>
            </div>
        )
    }
}