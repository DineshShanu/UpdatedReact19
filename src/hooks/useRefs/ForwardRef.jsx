import { useId, useRef } from "react";
import "../useEffectHook/Pokemon.css";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const Name = username.current.value;
    const Password = password.current.value;
    alert(Name + " " + Password);
  };

  return (
    <>
      <form onSubmit={handelFormSubmit}>
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
};

const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input type="text" ref={ref} />
    </div>
  );
};
