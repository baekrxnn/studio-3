import React, { Component } from 'react';
import swal from 'sweetalert';

export default class Timer extends Component {
    constructor(){
        super();
        this.state = {
            seconds: 120,
            formattedMin: "2",
            formattedSec: "00",
            gameOver: false
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            //const math = (this.state.seconds-1)%60<10 ? `0${(this.state.seconds-1)%60<10}` : (this.state.seconds-1)%60<10;
            this.setState( ({ seconds }) => {
                // let math //= ((seconds-1)%60<10) ? `0${((seconds-1)%60<10)}` : `${((seconds-1)%60<10)}`;
                let math = (seconds-1)%60;
                if (math < 10) {
                    math = `0${math}`
                }
                if (this.state.seconds === 0) {
                    clearInterval(this.myInterval);
                    this.setState({gameOver: true})
                } else {
                    return ({
                        seconds: seconds - 1, 
                        formattedMin: Math.floor((seconds-1)/60),
                        formattedSec: math
                    })
                }
                });
            }, 1000);
    }

    isGameOver = () =>  {
        return this.state.gameOver;
    }

    render() {
        const {formattedMin, formattedSec} = this.state;
        if (this.state.gameOver) {
            alert("gameOver!");
        } //else {
            return(
                <div className="timer">
                    <h2>Time Remaining </h2>
                    <h1>{formattedMin} : {formattedSec}</h1>
                </div>
            )
        //}
        
    }
}