import React from "react";

const Button = ({ text, fn }) => {
  return (
    <>
      <button
        onClick={fn}
        style={{
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "#fe2f29",
          outline: "none",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
