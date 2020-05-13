import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
    constructor() {
        super();
        this.child= React.createRef();
        this.state = {
            totalScore: 0,
            prompt: "text color",
            color: "blue",
            wording: "green",
        }
    }

    question = () => {
        this.child.current.handleSubmit();
        this.setState({totalScore: this.child.current.getScore()});
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
        (prompted===0 ? this.setState({prompt: "text color"}) : this.setState({prompt:"word"}))
        this.setState ({
            color: colors[promptColor],
            wording: colors[promptWord],
        })
    }
    
    render() {
        // this.question();
        return (
            <div>
                
                <h1 style={{color:this.state.color}}>{this.state.wording}</h1>
                <h2>Type the {this.state.prompt}!</h2>
                <InputBox score={this.state.totalScore} prompt={this.state.prompt} color={this.state.color} word={this.state.wording} ref={this.child}/>
                <button onClick={this.question}> click </button>
                {
                /*<h1 style={{color:this.props.color}}>{this.props.wording}</h1>
                <h2>Type the {this.props.prompt}!</h2>*/
                }
            </div>
            
        );
    }
}