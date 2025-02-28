import { useMemo } from "react";

const UseMemoExample = ({ num }) => {
  const computedValue = useMemo(() => {
    console.log("Recomputing value");
    return num * 2;
  }, [num]);
  return <div>Computed Value: {computedValue}</div>;
};

export default UseMemoExample;
<UseMemoExample num={4} />;

// Purpose: It is a hook used inside a functional component to memoize a value or computation. This prevents expensive calculations from being re-executed on every render unless the dependencies change.
// Usage: Typically used to memoize a calculated value or result of a function based on specific dependencies.
// In this example, computedValue will only re-compute when num changes, preventing unnecessary recalculation on each render.
