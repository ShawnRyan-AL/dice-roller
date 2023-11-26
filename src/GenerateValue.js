import React from 'react';
import './App.css';
import UserInput from './UserInput';

function GenerateValue(diceInfo) {

    const stateArray = [
        diceInfo['dFour'], 
        diceInfo['dSix'], 
        diceInfo['dEight'], 
        diceInfo['dTen'], 
        diceInfo['dTwelve'], 
        diceInfo['dTwenty']
    ]

    let fourArray = [];
    let sixArray = [];
    let eightArray = [];
    let tenArray = [];
    let twelveArray = [];
    let twentyArray = [];

    let sumTotal = 0;

    stateArray.forEach(die => {
        
        const { numberOfDice, numberOfSides } = die;

        for (let step = 0; step < numberOfDice; step++) {
            let value = Math.ceil(Math.random() * numberOfSides)
            sumTotal += value

            if (numberOfSides === 4) {
                fourArray.push(value)
            } else if (numberOfSides === 6) {
                sixArray.push(value)
            } else if (numberOfSides === 8) {
                eightArray.push(value)
            } else if (numberOfSides === 10) {
                tenArray.push(value)
            } else if (numberOfSides === 12) {
                twelveArray.push(value)
            } else {
                twentyArray.push(value)
            };
        };
    })

    console.log(fourArray);
    console.log(tenArray);
    console.log(twentyArray);

    return sumTotal;
}

export default GenerateValue;
