import React from "react";

const HelloNameUserInput = ({nameInput, setNameInput, nameError,  numOfTimes, setNumOfTimes, numError, displayHelloMessageButtonClicked,resetButtonClicked  }) => {
  return (
    <>
      <div>
        <label htmlFor="nameInput">Name:</label>{"  "}
        <input
          type="text"
          id="nameInput"
          name="nameInput"
          placeholder="Enter a Name"
          value={nameInput}
          onChange={(key) => setNameInput(key.target.value)}
        />
        <span style={{ color: "red" }}> {nameError}</span>
      </div>
      <div>
        <label htmlFor="numOfTimesInput">Num of Times: </label>{"  "}
        <input
          pattern="[0-9]*"
          max="3"
          maxLength="3"
          type="number"
          id="numOfTimes"
          name="numOfTimes"
          placeholder="Num of times"
          value={numOfTimes}
          onChange={(key) => setNumOfTimes(key.target.value)}
        />
        <span style={{ color: "red" }}> {numError}</span>
      </div>

      <div>
        <button className="mt-2" onClick={displayHelloMessageButtonClicked}>
          Display Hello
        </button>
        &nbsp;
        <button onClick={resetButtonClicked}>Reset</button>
      </div>
    </>
  );
};

export default HelloNameUserInput;
