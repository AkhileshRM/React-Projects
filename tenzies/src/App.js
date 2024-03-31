import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

function App() {

  const generateRandomDice = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateRandomDice());
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
   const allHeldDice = dice.every(die => die.isHeld) //Returns true only if all dice are held false otherwise
   const firstValue= dice[0].value
   const sameValues = dice.every(die => die.value === firstValue)
   if(allHeldDice && sameValues){
    setTenzies(true)
    console.log("You won")
   }
  }, [dice]);


  const rollDice = () => {
    if(!tenzies){
      setDice((prev) =>
      prev.map((die) => {
        return die.isHeld ? die : generateRandomDice();
      })
    );
    }
    else{
      setTenzies(false)
      setDice(allNewDice)
    }
    
  };

  const holdDice = (id) => {
    setDice((prev) =>
      prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const dieElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="App">
    {tenzies && <Confetti width="1000px"/>}
      <div className="inner-Container">
        <h1 className="heading">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{dieElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default App;
