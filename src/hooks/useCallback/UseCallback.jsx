import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <>
      <button
        className={`${
          children === "Increment" ? "btn btn-success" : "btn btn-danger"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Increment Inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrement Inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="text-center justify-content-center">
      <h1 className="mb-4">Count:{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
