import React, {useState} from 'react';
import HelloNameUserInput from '../../shared/HelloNameUserInput';

const HelloNameProgramFlow = () => {
    // M-Model => State (What input are we getting? Name and number of times)
    const [nameInput, setNameInput] = useState("");
    const [numOfTimesInput, setNumOfTimesInput] = useState("");
    const [helloMessageOutput, setHelloMessageOutput] = useState([]);
    const [nameError, setNameError] = useState("");
  const [numError, setNumError] = useState("");
    // const [errors, setErrors] = useState("");
    
    // C-Controller => Actions
    const displayHelloMessageButtonClicked = () => {
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
    if (numOfTimesInput === "") {
      setNumError("You must enter a number");
      numCheck = false;
    } else {
      setNumError("");
      numCheck = true;
    }
        
        setHelloMessageOutput([]);
        if (nameCheck === true && numCheck === true) {
        for(let ctr = 0; ctr < numOfTimesInput; ctr++ ){
                if ( ctr % 2 === 1 ) {
            setHelloMessageOutput(helloMessageOutput => [...helloMessageOutput, "Hello " + nameInput + "!"]) ; 
            } else {
                setHelloMessageOutput(helloMessageOutput => [...helloMessageOutput, "Hello " + nameInput])
            }
        }
    }
    }
    // Clear all input fields
    const resetButtonClicked = () => {
        setNameInput("");
        setNumOfTimesInput("");
        setNameError("");
        setNumError("");
        setHelloMessageOutput([]);
    }
    
    // V-View
    return (
    <>
    <HelloNameUserInput displayHelloMessageButtonClicked={displayHelloMessageButtonClicked} resetButtonClicked={resetButtonClicked}  nameInput={nameInput} setNameInput={setNameInput} nameError={nameError} numOfTimes={numOfTimesInput} setNumOfTimes={setNumOfTimesInput} numError={numError}/>
    
    
    <ol className="mt-5">
       <h1> {helloMessageOutput.map(
            (message, index) => <li key={index}>{message}</li>
        )} 
        </h1>
    </ol>
        
    </>
)};

export default HelloNameProgramFlow;