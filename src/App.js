import "./App.scss";
import Form from "./components/Form/Form";
import { useState } from "react";
const App = () => {
  const [signBtn, setSignBtn] = useState(false);
  const handleArrowClick = () => {
    setSignBtn((prevValue) => !prevValue);
  };
  return (
    <div className="App">
      <div className="form-left_container">
        <div className="left_container-wrapper">
          <h1 className="form__title">Let’s set up your account</h1>
          <h4 className="form__signIn-text">
            Already have an account? <span>Sign in</span>
          </h4>
          <Form />
          <h3 className="form__terms-conditions">
            By clicking the “Next” button, you agree to creating a free account,
            and to <a href="#terms">Terms of Service</a> and{" "}
            <a href="#privacy">Privacy Policy.</a>
          </h3>
        </div>
      </div>
      <div className={`form-right_container ${signBtn}`}>
        <div className={`right_container-wrapper ${signBtn}`}>
          <h1 className="dummy-heading">Dummy Heading</h1>
          <h2 className="dummy-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>

          <div className="form_signUp">
            <h3 className="form_signUp-text">Sign Up</h3>
            <div className="form_signUp-arrow" onClick={handleArrowClick}>
              <span className="horizontal"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
