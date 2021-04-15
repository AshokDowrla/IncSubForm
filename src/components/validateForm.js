
let validateErrors = {};
export default function validateForm(name, value, errors) {
  // value = value.trim();
  validateErrors = { ...errors };
  let capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!value.trim().length) {
    validateErrors[name] = capitalisedName + " can not be empty";

    return validateErrors;
  }

  if (name === "username") {
    if (!/^[a-zA-Z0-9]{3,15}([_ ]?[a-zA-Z0-9])*$/.test(value)) {
      validateErrors[name] = capitalisedName + " is not valid";
    } else {
      validateErrors[name] = "";
    }
  } else if (name === "email") {
    if (
      !/^([a-zA-Z0-9_\-.+]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(value)
    ) {
      validateErrors[name] = capitalisedName + " is not valid";
    } else {
      validateErrors[name] = "";
    }
  } else if (name === "password") {
    if (
      !/^(?=.*\d)(?=(.*[\W]))(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/.test(value)
    ) {
      validateErrors[name] =
        capitalisedName +
        " must contain atleast 1 digit, atleast 1 lowercase character, atleast 1 uppercase character, atleast 1 special character, minimum 8 characters with no spaces";
    } else {
      validateErrors[name] = "";
    }
  }

  return validateErrors;
}
