import React from "react";
import useForm from "../CustomHooks/UseForm";
import FormInput from "../FormInput/FormInput";
import validateForm from "../validateForm";
import Button from "../Button/Button";
import "./Form.scss";
import FormSelectInput from "../FormInput/FormSelectInput/FormSelectInput";
import visibleEye from "../../images/visible-eye.png"
const Form = () => {
  const {
    inputValues,
    handleChange,
    handleSubmit,
    errors,
    errorFlag,
    handleDropdown,
  } = useForm(validateForm);

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormInput
        inputName="username"
        inputType="text"
        inputPlaceHolder="Your name"
        inputValue={inputValues.username}
        inputChangeHandler={handleChange}
        inputError={errors.username}
      />
      <FormInput
        inputName="email"
        inputType="email"
        inputPlaceHolder="Email address"
        inputValue={inputValues.email}
        inputChangeHandler={handleChange}
        inputError={errors.email}
      />
      <FormSelectInput
        inputName="user_type"
        inputType="dropdown"
        inputPlaceHolder="I would describe my user type as"
        inputOptions={["Developer", "Admin", "Developer", "Admin"]}
        inputValue={inputValues.user_type}
        inputChangeHandler={handleDropdown}
        // inputError={errors.user_type}
      />
      <FormInput
        inputName="password"
        inputType="password"
        inputPlaceHolder="Password"
        inputValue={inputValues.password}
        inputChangeHandler={handleChange}
        inputError={errors.password}
        inputImg = {visibleEye}
      />

      <Button btnText="Next" disabled={errorFlag ? "disabled" : ""} />
    </form>
  );
};

export default Form;
