import React from "react";

const ChildComponent = React.memo(({ count }) => {
  console.log("Rendering Child Component");
  return <div>Count: {count}</div>;
});

const ParentReactMemoComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ChildComponent count={"Hello 1"} />
      {/* <ChildComponent count={count} /> */}
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ParentReactMemoComponent;

// Here, ChildComponent will only re-render when its count prop changes. Even if the parent re-renders for other reasons, ChildComponent will skip re-rendering unless its specific props change.

//useMemo:
//Memoizes values or computations inside a component.
//Used for optimization of expensive calculations.
//Returns a memoized value.

//memo:
//Memoizes the entire component.
//Prevents unnecessary re-renders of a component unless props change.
//Wrapping a component with memo prevents re-rendering when the props stay the same.


//In summary:
//Use useMemo to optimize computations.
//Use React.memo to optimize re-rendering of functional components based on props.