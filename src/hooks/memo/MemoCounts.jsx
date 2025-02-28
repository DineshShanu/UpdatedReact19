import React, { memo, useRef } from "react";

export const Counts = memo(({ data }) => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <div className="mt-3 text-center">
        <p className="">
          Nothing changed here but I've now rendered:
          <span className="text-danger">{renderCount.current++}times(s)</span>
        </p>
        <p>
          {data.name}- {data.address}
        </p>
      </div>
    </>
  );
});
