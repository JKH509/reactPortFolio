import React, {useState} from 'react';


const NumberApp = () => {
// Model
const [numberInput, setNumberInput] =  useState("");
const [numberOutput, setNumberOutput] = useState([]);
const [sumOutput, setSumOutput] = useState(0);



 // Controllers
 const addButtonClicked = (e) => {
    setNumberOutput(numberOutput => [...numberOutput, numberInput])
    // alert("Add button clicked" )
}
const calculateButtonClicked = (e) => {
    let sum = 0
    for(const num of numberOutput){
        sum += parseInt(num);
    }
    setSumOutput(sum);
    alert("Calculate button clicked" )
}
 const resetButtonClicked = (e) => {
     setNumberInput("");
    setNumberOutput([]);
    setSumOutput(0);
    alert("Reset button clicked" )
}


 // View
 return (
     <>
        <label htmlFor="numberInput">Number: </label>
        <input type="number" id="numberInput" name="numberInput"
         value={numberInput} onChange={(key) => setNumberInput(key.target.value)}  />
        <div className="row">
            <button className="col" onClick={addButtonClicked}>Add Number</button>{" "}
            <button className="col" disabled={numberOutput.length < 2 } onClick={calculateButtonClicked}>Calculate</button>{" "}
            <button className="col" onClick={resetButtonClicked}>Reset</button>
        </div>
        <div style={numberOutput.length !== 0 ? {} : {display:'none'}}>
            <h2>Numbers added</h2>
            <h2>{numberOutput.map(
                num => " " + num
            )}</h2>
        </div>
        <div style={numberOutput.length !== 0 ? {} : {display:'none'}}>
            <h2>Sum of Numbers added</h2>
            <h2>{numberOutput.map((num, index) => (index ===0 ? "" : "+")  + num)} = {sumOutput}</h2>
        </div>
     </>
 )};

export default NumberApp;