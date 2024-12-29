import { useRef } from "react";
import "../useEffectHook/Pokemon.css";

const UseRef = () => {
  const username = useRef();
  const password = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const Name = username.current.value;
    const Password = password.current.value;
    alert(`Hi ${Name}, Your Password is ${Password}`);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="username"
          placeholder="User Name"
          ref={username}
        />
        <br />
        <input
          type="text"
          id="password"
          placeholder="Password"
          ref={password}
        />
        <br />
        <input type="submit" value="Submit" className="btn btn-primary m-2" />
      </form>
    </>
  );
};
export default UseRef;