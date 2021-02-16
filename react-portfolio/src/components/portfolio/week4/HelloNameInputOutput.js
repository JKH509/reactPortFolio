import React, { useState } from "react";
import HelloNameUserInput from '../../shared/HelloNameUserInput';


const HelloNameInputOutput = () => {
  // Model
  const [nameInput, setNameInput] = useState("");
  const [numOfTimes, setNumOfTimes] = useState("");
  const [helloMessageOutput, setHelloMessageOutput] = useState("");
  const [nameError, setNameError] = useState("");
  const [numError, setNumError] = useState("");


  // Controllers
  const displayHelloMessageButtonClicked = (e) => {
    let nameCheck = false;
    let numCheck = false;

    if (nameInput === "") {
      setNameError("You must enter a name");
      nameCheck = false;
    } else if (nameInput.length < 5) {
      setNameError("You must enter at least 5 characters");
      nameCheck = false;
    } else if (nameInput.length >= 25) {
      setNameError("You can not enter a name with more than 25 characters");
      nameCheck = false;
    } else {
      nameCheck = true;
      setNameError("");
    }
    if (numOfTimes === "") {
      setNumError("You must enter a number");
      numCheck = false;
    } else {
      setNumError("");
      numCheck = true;
    }

    if (nameCheck === true && numCheck === true) {
      setHelloMessageOutput(nameInput + " a total of times " + numOfTimes);
    }
  };

  const resetButtonClicked = (e) => {
    e.preventDefault();
    setHelloMessageOutput("");
    setNameInput("");
    setNumOfTimes("");
    setNameError("");
    setNumError("");
  };


  // VIEW
  return (
    <>
       <HelloNameUserInput  displayHelloMessageButtonClicked={displayHelloMessageButtonClicked} resetButtonClicked={resetButtonClicked} nameInput={nameInput} setNameInput={setNameInput} nameError={nameError} numOfTimes={numOfTimes} setNumOfTimes={setNumOfTimes} numError={numError}/>

       

      <h1 className="mt-5 mb-5">{helloMessageOutput}</h1>
    </>
  );
};

export default HelloNameInputOutput;
