import React, { useMemo, useState } from "react";
import { Counts } from "./MemoCounts";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return {
      name: "Dinesh Kr",
      address: "Jharkhand",
    };
  }, []);
  return (
    <>
      <div className="p-4 h-50 flex-column text-center">
        <h1>{count}</h1>
        <button
          className="btn btn-success"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts data={data} />
    </>
  );
};

export default ReactMemo;
