import React from "react";

function EventPropagation() {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const hanldParentClick = () => {
    console.log("Parent clicked..");
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child Clicked..");
  };

  return (
    <>
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={hanldParentClick}>
            <button className="c-div" onClick={handleChildClick}>
              Child Div
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventPropagation;
