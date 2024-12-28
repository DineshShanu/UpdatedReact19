import React, { useState } from "react";

const stepDecrementUseState = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(count);

  const onHandleIncrement = () => {
    setStep(count + step);
  };

  const onHandleDecrement = () => {
    setStep(step - count);
  };

  const resetValue = () => {
    setCount(0);
    setStep(0);
  };

  return (
    <>
      <h3 className="text text-danger text-center mt-5">useState Challenge</h3>
      <h4>Count: {step} </h4>
      <h4>
        Steps:
        <input
          className="w-25"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </h4>
      <div className="m-4">
        <button
          className="btn btn-primary m-2"
          onClick={onHandleIncrement}
          disabled={step >= 100}
        >
          Increment
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onHandleDecrement}
          disabled={step <= 0}
        >
          Decrement
        </button>
        <button className="btn btn-primary m-2" onClick={resetValue}>
          Reset
        </button>
      </div>
    </>
  );
};

export default stepDecrementUseState;
