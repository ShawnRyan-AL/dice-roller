import React, { Component } from 'react';
import './App.css';
import GenerateValue from './GenerateValue';

class UserInput extends Component {
    state = {
        diceInfo: {
            dFour: {
                numberOfDice: 0,
                numberOfSides: 4,
            },
            dSix: {
                numberOfDice: 0,
                numberOfSides: 6,
            },
            dEight: {
                numberOfDice: 0,
                numberOfSides: 8,
            },
            dTen: {
                numberOfDice: 0,
                numberOfSides: 10,
            },
            dTwelve: {
                numberOfDice: 0,
                numberOfSides: 12,
            },
            dTwenty: {
                numberOfDice: 0,
                numberOfSides: 20,
            },
        },
    }

    updateDFour = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dFour: {
                    ...diceInfo.dFour, 
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    updateDSix = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dSix: {
                    ...diceInfo.dSix,
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    updateDEight = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dEight: {
                    ...diceInfo.dEight,
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    updateDTen = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dTen: {
                    ...diceInfo.dTen,
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    updateDTwelve = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dTwelve: {
                    ...diceInfo.dTwelve,
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    updateDTwenty = (event) => {
        const { diceInfo } = this.state;

        this.setState({
            diceInfo: {
                ...diceInfo, 
                dTwenty: {
                    ...diceInfo.dTwenty,
                    numberOfDice: event.target.value, 
                }, 
            },
        });
    }

    onRollButtonClick = () => {
        const { diceInfo } = this.state;
        this.props.onRollButtonClick(GenerateValue(diceInfo));
    }

    render() {
        const { 
            diceInfo: { 
                dFour: { 
                    numberOfDice: dFourCount, 
                }, 
                dSix: {
                    numberOfDice: dSixCount, 
                },
                dEight: {
                    numberOfDice: dEightCount, 
                },
                dTen: {
                    numberOfDice: dTenCount, 
                },
                dTwelve: {
                    numberOfDice: dTwelveCount, 
                },
                dTwenty: {
                    numberOfDice: dTwentyCount, 
                },
            },
        } = this.state;

        console.log(this.state);

        return(
            <div>
                <div>
                    D4:
                    <input type='number' value={dFourCount} onChange={this.updateDFour} />
                </div>
                <div>
                    D6:
                    <input type='number' value={dSixCount} onChange={this.updateDSix} />
                </div>
                <div>
                    D8:
                    <input type='number' value={dEightCount} onChange={this.updateDEight} />
                </div>
                <div>
                    D10:
                    <input type='number' value={dTenCount} onChange={this.updateDTen} />
                </div>
                <div>
                    D12:
                    <input type='number' value={dTwelveCount} onChange={this.updateDTwelve} />
                </div>
                <div>
                    D20:
                    <input type='number' value={dTwentyCount} onChange={this.updateDTwenty} />
                </div>
                <button type='button' onClick={this.onRollButtonClick}>
                    Roll
                </button>
            </div>
        );
    }
}

export default UserInput;