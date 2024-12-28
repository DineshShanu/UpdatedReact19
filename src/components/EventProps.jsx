import React from "react";
import { SuccessButton } from "../shared/styled/commonStyle";

function EventProps() {
  const HandleWelcomeUser = (user) => {
    alert(`Hay ${user}`);
  };
  const handleHover = () => {
    alert(`Hay thanks for hovering me..`);
  };
  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeUser("Dinesh")}
        onButtonMouseEnter={handleHover}
      />
    </>
  );
}

export default EventProps;

const WelcomeUser = ({ onButtonClick, onButtonMouseEnter }) => {
  const handleGreeting = () => {
    alert("Hello this is Greeting message");
  };

  return (
    <>
      <SuccessButton onClick={onButtonClick}>Click</SuccessButton>
      <SuccessButton onMouseEnter={onButtonMouseEnter}>Hover</SuccessButton>
      <SuccessButton onClick={handleGreeting}>Greeting</SuccessButton>
    </>
  );
};
