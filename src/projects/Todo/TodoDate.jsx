import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [curDateTime, setCurrentTime] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      const getCurrentTime = new Date().toLocaleTimeString();
      const getCurrentDate = new Date().toLocaleDateString();
      setCurrentTime(`${getCurrentDate} - ${getCurrentTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h4>{curDateTime}</h4>
    </>
  );
};

export default TodoDate;
