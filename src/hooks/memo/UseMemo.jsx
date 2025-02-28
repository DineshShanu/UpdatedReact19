import React, { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    //console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 10000000; i++) {
      i = i + 1;
    }
    return i;
  };
  //const total = sum();
  const total = useMemo(() => sum(), []);
  return <p>sum:{total}</p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-success btn-sm"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders:{count}</p>
    </div>
  );
};

export default MemoParentComponent;
