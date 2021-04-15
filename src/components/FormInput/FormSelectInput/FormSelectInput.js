import { useState } from "react";
import "./FormSelectInput.scss";
const FormSelectInput = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropDownValue, setdropDownValue] = useState(props.inputPlaceHolder);
  const handleOptionsDropdown = () => {
    setDropdown(!dropdown);
  };

  const onDropDownSelect = (inputName, option) => {
    setDropdown(!dropdown);
    setdropDownValue(option)
    props.inputChangeHandler(inputName, option);
  };
  const dropdownActive = dropdown ? "active" : "";

  return (
    <div className="form__select-container">
      <div className={`form__select-chevron ${dropdownActive}`}>
        <div className={`form__select-input`} onClick={handleOptionsDropdown}>
          {dropDownValue}
        </div>
        <div className="form__select-arrow">
          <span className="horizontal"></span>
        </div>
      </div>
      <div className={`form__select-options ${dropdownActive}`}>
        {props.inputOptions.map((option, index) => (
          <div
            name={props.inputName}
            key={index}
            className="form__select-option"
            data-value={option}
            onClick={() => {
              onDropDownSelect(props.inputName, option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSelectInput;
