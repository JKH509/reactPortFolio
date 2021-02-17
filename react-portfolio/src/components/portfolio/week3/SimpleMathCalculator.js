import { React, useState } from "react";

const SimpleMathCalculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("+");
  const [calculation, setCalculation] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState("");

  const calcClicked = (e) => {
    let num1Check = false;
    let num2Check = false;

      if (firstNumber.length === 0 ) {
        setErrors("You must enter a first number.")
        num1Check = false;
      } else if (!Number.isInteger( Number(firstNumber) ) ){
        setErrors("You must enter a whole number. No decimals allowed")
        num1Check = false;   
      } else if(secondNumber.length === 0 ) {
        setErrors("You must enter a second number that is also a whole number, No decimals allowed")
        num2Check = false;
      } else if (!Number.isInteger( Number(secondNumber) ) ){
        setErrors("You must enter a whole number. No decimals allowed")
        num1Check = false;
      } else {
        num1Check = true;
        num2Check = true;
        setErrors("");
      };
      if (num1Check === true && num2Check === true) {
        setCalculation(firstNumber +" "+ operation +" "+ secondNumber);
    };
      
      if ( operation === "+" || operation === "") {
          setAnswer(parseInt(firstNumber) + parseInt(secondNumber) );
         
      } else if (operation === "-") {
        setAnswer( parseInt(firstNumber) -  parseInt(secondNumber) );
        
      } else if (operation === "*") {
        setAnswer( parseInt(firstNumber) *  parseInt(secondNumber) );
      
      } else if (operation === "/") {
        setAnswer( parseInt(firstNumber) /  parseInt(secondNumber) );
      } else {
     
      }
  }

  const resetClicked = (e) => {
    e.preventDefault();
        setFirstNumber("")
        setSecondNumber("")
        setOperation("+")
        setCalculation("")
        setAnswer("")
        setErrors("");
  }

  return (
    <>
      <main className="container">
      {  errors !== "" ? <div
            className="jumbotron alert alert-danger alert-dismissable fade show"
            role="alert">
            <h2>Please resolve the following errors.</h2>
            <ul>
              <li>{errors}</li>
            </ul>
          </div> : "" } 
        
          <div className="container text-center justify-items-center">
            <div className="row text-center justify-content-center">
              <div className="col-4 col-sm-3 col-lg-2">
                <label htmlFor="FirstNumber"></label>
                <input
                  className="form-control"
                  type="number"
                  id="firstNumber"
                  pattern="[0-9]"
                  name="firstNumber"
                  value={firstNumber}
                  onChange={(key) => setFirstNumber(key.target.value)}
                  placeholder="First Number"
                />
              </div>
              <div className="col-4 col-sm-3 col-lg-2 mt-4">
                <select className="form-control" id="operation" name="operation" onChange={(key) => setOperation(key.target.value)} value={operation}>
                  
                  <option value="+" > Addition (+)</option>
                  <option value="-" >Subtraction (-)</option>
                  <option value="*" >Multiplication (*)</option>
                  <option value="/" >Division (/)</option>
                </select>
              </div>
              <div className="col-4 col-sm-3 col-lg-2">
                <label htmlFor="SecondNumber"></label>
                <input
                  className="form-control"
                  type="number"
                  pattern="[0-9]"
                  id="SecondNumber"
                  name="SecondNumber"
                  value={secondNumber}
                  onChange={(key) => setSecondNumber(key.target.value)}
                  placeholder="Second Number"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col  mr-auto">
                <input
                  type="submit"
                  value="Calculate"
                  className="btn btn-primary mt-2  mr-2"
                  onClick={calcClicked}
                />
                <button onClick={resetClicked} className="btn btn-danger  mt-2">
                  Clear
                </button>
              </div>
            </div>
          </div>
        
        {  answer !== "" && firstNumber !== "" && secondNumber !== "" && errors === "" ? 
        <div className=" row justify-content-center">
        <div className="col-6  mt-3 " id="displayCalc" name="displayCalc">
          <div className=" jumbotron text-center ">
            <div className="">
              <h1>{answer}</h1>
              <h2>
                The answer to {calculation}
              </h2>
            </div>
          </div>
        </div>
        </div> : "" } 
        
      </main>
    </>
  );
};

export default SimpleMathCalculator;
