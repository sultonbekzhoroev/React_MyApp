import React from "react";

const Button = (props) => {
  return <button onClick={props.function}>{props.btnName}</button>;
};

export default Button;
