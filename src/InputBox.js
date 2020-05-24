import React, { Component } from 'react';

export default class InputBox extends Component{
    constructor() {
        super();
        this.state = {
            score: 0,
            value: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.answerCheck = this.answerCheck.bind(this);
    }
    
    answerCheck = (event) => {
        // let received = event.target.value.trim()
        this.setState({value:event.target.value.trim()});
        // console.log(received+"hi");
    }
    
    handleSubmit = () => {
        let prompt = this.props.prompt;
        let color = this.props.color;
        let word = this.props.word;
        // console.log(prompt + color + word);
        //event.preventDefault();
        console.log(this.state.value);
        // console.log(prompt+word);
        let received = this.state.value;
        if (prompt === "text color" && received.toLowerCase() === color) {
            console.log("correct");
            this.setState({value:""});
            return 1;
        } else if (prompt === "word" && received.toLowerCase() === word) {
            console.log("correct");
            this.setState({value:""});
            return 1;
        } else {
            console.log("incorrect");
            this.setState({value:""});
            return 0;
        }
    }
    
    render() {
        return (
            <div className="box">
                <input value={this.state.value} onChange={this.answerCheck} onKeyPress={this.answerCheck}></input>
            </div>
        )
    }
}