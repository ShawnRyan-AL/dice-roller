import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';

class App extends Component {
    state = {
        rollValue: '',
    }

    OnRollClick = (value) => {
        const { rollValue } = this.state;
        //console.log(rollValue);
        this.setState({rollValue: value})
    }

    render() {
        const { rollValue } = this.state;
        return (
            <div className='App'>
                <div className='Title'>
                    Dice Roller
                </div>
                <div>
                    <UserInput onRollButtonClick={this.OnRollClick}/>
                </div>
                <div>
                    Value: {rollValue}
                </div>
            </div>
        );
    }
}

export default App;