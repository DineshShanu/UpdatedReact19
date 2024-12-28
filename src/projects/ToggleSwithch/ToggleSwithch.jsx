import React, { useState } from "react";
import "../ToggleSwithch/ToggleSwithch.css";
import { IoIosSwitch } from "react-icons/io";

function ToggleSwithch() {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "#ccc" };
  return (
    <>
      <h5 className="text-center">
        Toggle Button{" "}
        <IoIosSwitch style={{ color: isOn ? "#4caf50" : "#f44336" }} />
      </h5>
      <div
        className="toggle-switch"
        onClick={handleToggleSwitch}
        style={toggleBGColor}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
}

export default ToggleSwithch;
