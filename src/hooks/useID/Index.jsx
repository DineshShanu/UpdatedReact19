import React, { useId } from "react";

export const UseId = () => {
  const id = useId();

  const handelFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="text text-center" onSubmit={handelFormSubmit}>
      <div>
        <label htmlFor={id + `username`}>User Name</label>
        <br />
        <input type="text" id={id + "username"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "password"}>Password</label>
        <br />
        <input type="password" id={id + "password"} name={id + "password"} />
      </div>
      <br />
      <button type="submit" className="btn-sm btn btn-success">
        Submit
      </button>
    </form>
  );
};
