import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
    constructor() {
        super();
        this.child= React.createRef();
        this.state = {
            index:0,
            totalScore: 0,
            prompt: "word",
            textcolor: "blue",
            wording: "green",
        }
    }

    question = () => {
        this.setState({totalScore: this.state.totalScore+this.child.current.handleSubmit()});
        // console.log("totalScore state: "+this.state.totalScore);
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
        let prompted = Math.floor(Math.random()*2);
        (prompted===0 ? this.setState({prompt: "word"}) : this.setState({prompt:"text color"}))
        this.setState ({
            index: this.state.index++,
            textcolor: colors[promptColor],
            wording: colors[promptWord],
        })
    }

    getScore = () => {
        this.props.parentFunction();
        return this.state.totalScore;
    }
    
    render() {
        console.log("");
        // console.log(this.state);
        console.log("totalScore state: "+this.state.totalScore);
        return (
            <div>
                <h1 style={{color:this.state.textcolor}} id="theWord">{this.state.wording}</h1>
                <h2>Type the {this.state.prompt}!</h2>
                <InputBox prompt={this.state.prompt} color={this.state.textcolor} word={this.state.wording} ref={this.child} key={this.state.index}/>
                <button onClick={this.question}> Submit </button>
                {
                /*<h1 style={{color:this.props.color}}>{this.props.wording}</h1>
                <h2>Type the {this.props.prompt}!</h2>*/
                }
            </div>
            
        );
    }
}