import React, {Component} from 'react';
import Clock from './clock';
import './app.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'May 3, 2018',
            newDeadline: ''
        }
    }
    changeDeadline(){
        this.setState({
            deadline: this.state.newDeadline
        })
    }
    render(){
        return(
            <div className= "app">
                <div className= "app-title">Countdown To {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <div className= "app-input-container">
                    <input
                    className= "app-input"
                    type="text" 
                    placeholder = "New Date"
                    onChange = {event => this.setState({newDeadline:event.target.value}) }
                    />
                    <button 
                    className = "app-btn"
                    onClick = {() => this.changeDeadline()}
                    >
                    Submit
                    </button>
                </div>
            </div>
        )
    }
}
export default App;