import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <button
      type="submit"
      className={`form-btn ${props.disabled}`}
      disabled={props.disabled ? true : false}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
