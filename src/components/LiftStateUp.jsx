import React, { useState } from "react";

function LiftStateUp() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
}

export default LiftStateUp;

export const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <p>Hello this is Input Component.</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export const DisplayComponent = ({ inputValue }) => {
  return (
    <>
      <p>Hello this is Display Component.</p>
      <p>The Current Input value is: <span className="text text-danger">{inputValue}</span> </p>
    </>
  );
};
