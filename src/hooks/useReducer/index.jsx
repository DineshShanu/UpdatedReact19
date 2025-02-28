import { useReducer } from "react";

const ReducerComp = () => {
  const inititalState = {
    count: 0,
  };

  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };

      case "DECREMENT":
        return { ...state, count: state.count - 1 };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState);

  return (
    <>
      <div className="text text-center">
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="btn btn-info m-1">
          + Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="btn btn-info m-1">
          - Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="btn btn-danger">
          Reset
        </button>
      </div>
    </>
  );
};

export default ReducerComp;