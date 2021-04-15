import { useState, useEffect } from "react";
const useForm = (validateForm) => {
  const [inputValues, setinputValues] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "Minimum 8 characters",
    user_type: "",
  });
  const [errorFlag, setErrorFlag] = useState(true);
  useEffect(() => {
    for (let errorItem in inputValues) {
      if (inputValues[errorItem].trim().length && !errors[errorItem].length) {
        setErrorFlag(false);
      } else {
        setErrorFlag(true);
        break;
      }
    }
  }, [inputValues, errors]);

  const handleDropdown = (name, option) => {
    let updatedInputs = { ...inputValues, [name]: option };
    setinputValues(updatedInputs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validateForm(name, value, errors));
    let updatedInputs = { ...inputValues, [name]: value };
    setinputValues(updatedInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return {
    inputValues,
    handleChange,
    handleSubmit,
    errors,
    errorFlag,
    handleDropdown,
  };
};

export default useForm;
