import React, {Component} from 'react';
import './app.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(() => {
            this.getTimeUntil(this.props.deadline);
        }, 1000);
    }
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 60 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({
            days,
            hours,
            minutes,
            seconds
        });
    }
    adding0(num){
        return num < 10 ? `0${num}`: num;
    }
    render(){
        return(
            <div>
                <div className= "clock-days">{this.adding0(this.state.days)} Day</div>
                <div className= "clock-hours">{this.adding0(this.state.hours)} Hours</div>
                <div className= "clock-minutes">{this.adding0(this.state.minutes)} Minutes</div>
                <div className= "clock-seconds">{this.adding0(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}
export default Clock;