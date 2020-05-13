import React, { Component } from 'react';

export default class InputBox extends Component{
    constructor() {
        super();
        this.state = {
            score: 0,
            value: "",
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
        this.setState({score: this.props.score});
        // console.log(this.state.score);
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
        // console.log(prompt + color + word);
        //event.preventDefault();
        console.log(this.state.value);
        if (prompt === "color" && this.state.value === color) {
            this.setState({score: this.state.score++});
            console.log(this.state.score);
        } else if (prompt === "word" && this.state.value === word) {
            this.setState({score: this.state.score++});
            console.log("score: "+this.state.score);
        } else {
            console.log(this.state.score);
        }
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
        // console.log("submitted");
    }

    getScore = () => {
        return this.state.score;
    }
    
    render() {
        return (
            <div className="box">
                <input value={this.state.value} onChange={this.answerCheck}></input>
                {/*<button onClick={this.handleSubmit}> submit </button>*/}
            </div>
        )
    }
}