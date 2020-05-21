import React, { Component } from 'react';
import InputBox from './InputBox.js';
import './App.css';

export default class Word extends Component {
    
    render() {
        console.log("");
        // console.log(this.state);
        // console.log("index: "+this.state.index);
        // console.log("totalScore state: "+this.state.totalScore);
        return (
            <div>
                {/* <h1> score: {this.state.totalScore}</h1>
                <h2>question #{this.state.index+1}</h2> */}
                <h1 style={{color:this.props.color}} id="theWord">{this.props.word}</h1>
                <h2>Type the {this.props.prompt}!</h2>
                {/* <InputBox prompt={this.state.prompt} color={this.state.textcolor} word={this.state.wording} ref={this.child} key={this.state.index}/> */}
                {/* <button onClick={this.question}> Submit </button> */}
                {
                /*<h1 style={{color:this.props.color}}>{this.props.wording}</h1>
                <h2>Type the {this.props.prompt}!</h2>*/
                }
            </div>
            
        );
    }
}