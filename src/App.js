import React, { Component } from 'react';
import './App.css';
import Word from './Word.js';
import Timer from './timer.js'
import InputBox from './InputBox.js';

export default class App extends Component {
    constructor() {
        super();
        this.child= React.createRef(); //InputBox
        this.time = React.createRef(); // timer
        this.state = {
            totalScore: 0,
            index:0,
            gameOver: false,
            textcolor:"blue",
            wording:"green",
            prompt:"word"
        }
    }

    question = () => {
        this.setState({gameOver: this.time.current.isGameOver()})
        // console.log(this.state.gameOver);
        if (this.state.gameOver) {
            alert("game over from App");
        } else {
            this.setState({
                totalScore: this.state.totalScore+this.child.current.handleSubmit(),
                index: this.state.index+1
            });
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
            (prompted===0 ? this.setState({prompt: "word"}) : this.setState({prompt:"text color"}));
            this.setState ({
                textcolor: colors[promptColor],
                wording: colors[promptWord],
            })
        }
    }

    reset = () => {
        this.setState({
            gameOver: false,
            totalScore: 0,
            index: 0,
        })
    }
    
    render() {
        console.log(`Score: ${this.state.totalScore}`);
        console.log(`Question ${this.state.index+1}`);
        if (this.state.gameOver) {
            return(
                <div className="endScreen">
                    <h1> Game Over!</h1>
                    <h1> Your accuracy was {(Math.round(this.state.totalScore/this.state.index*100))}%</h1>
                    <br></br>
                    <button onClick={this.reset}> Play Again! </button>
                </div>
            )
        }
        return (
            <div>
                <div>
                    <Timer ref={this.time} score={this.state.totalScore} attempts={this.state.index} parentFunction={this.question} />
                </div>
                
                <div className="game">
                    <Word question={this.state.textcolor} prompt={this.state.prompt} color={this.state.textcolor} word={this.state.wording}/>
                    <InputBox prompt={this.state.prompt} color={this.state.textcolor} word={this.state.wording} ref={this.child} key={this.state.index}/>
                    <button onClick={this.question}> Submit </button>
                    <h5>Learn about the <a href="https://youtu.be/reUic5tyVwo?t=10" target="_blank">Stroop Effect</a>, the science behind this game</h5>
                </div>
                
            </div>
        );
    }
}

