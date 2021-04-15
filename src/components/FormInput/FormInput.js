import React, { useState } from "react";
import "./FormInput.scss";

const FormInput = (props) => {
  const [showSecret, setshowSecret] = useState(false);
  let isError = null;
  if (props.inputError && props.inputError !== "Minimum 8 characters") {
    isError = true;
  } else {
    isError = false;
  }

  const showInputType = showSecret ? "text" : props.inputType;
  return (
    <div className={`form-input-container  ${isError}`}>
      <input
        id={props.inputName}
        name={props.inputName}
        type={showInputType}
        placeholder=" "
        value={props.inputValue}
        onChange={props.inputChangeHandler}
        className="form-input"
      />
      {props.inputImg && (
        <img
          src={props.inputImg}
          alt=""
          className="form-input_img"
          onMouseDown={() => setshowSecret(!showSecret)}
        />
      )}
      <label htmlFor={props.inputName} className="form__label">
        {props.inputPlaceHolder}
      </label>
      {props.inputError && <div className="err-msg">{props.inputError}</div>}
    </div>
  );
};

export default FormInput;
