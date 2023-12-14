import React from "react";

const MyCustomButton = ({ text, onClick }) => {
  return (
    <button className={"myCustomBtn"} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyCustomButton;
