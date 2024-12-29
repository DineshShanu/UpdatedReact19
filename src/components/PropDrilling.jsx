import React from "react";

const PropDrilling = () => {
  return (
    <>
      <section>
        <h1 className="text text-bg-info text-light p-2 text-center">
          Component A
        </h1>
        <ChildComponent data="Welcome to my React JS" />
      </section>
    </>
  );
};

export default PropDrilling;

const ChildComponent = (props) => {
  return (
    <>
      <h3 className="text text-bg-warning text-center text-light">This is Child Component</h3>
      <h3 className="text text-bg-danger text-center">{props.data}</h3>
      <GrandChildComponent data="This is my Grand Child Component" />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h3 className="text text-bg-danger text-center">{props.data}</h3>
    </>
  );
};
