import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(){
        super();
        this.state = {
            minutes: 2,
            seconds: 0
        }
    }
    render() {
        const {minutes, seconds} = this.state;
        return(
            <div>
                <h2>Time Remaining</h2>
                <h1>{minutes} : {seconds<10 ? `0${seconds}` : seconds}</h1>
            </div>
        )
    }
}