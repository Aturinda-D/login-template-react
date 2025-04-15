import React from "react";
import Input from "./Input";
import LoginButton from "./loginButton";
import SignupWithButton from "./SignupWithButton";
import { IoEyeOutline } from "react-icons/io5";
import { FaApple, FaFacebook } from "react-icons/fa";
import GoogleIcon from "./GoogleIcon";

const RegistrationForm = () => {
  const [formDetails, setFormDetails] = React.useState({
    username: "Johnson Doe",
    email: "johnsondoe@nomail.com",
    password: "IAmJohnsonDoe",
  });
  const handleOnChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
  };
  return (
    <div className="reg-form">
      <div>
        <h4>let's get you started</h4>
        <h2>Create an Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Your Name"
          value={formDetails?.username}
          onChange={handleOnChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formDetails?.email}
          onChange={handleOnChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formDetails?.password}
          onChange={handleOnChange}
          icon={<IoEyeOutline className="passwd-icon" />}
        />
        <LoginButton type="submit" text={"get started"} />
      </form>
      <div className="separator">
        <hr style={{ width: "100%" }} />
        <p>Or</p>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="signup-options">
        <SignupWithButton
          text={"Google"}
          icon={<GoogleIcon className="signup-icon" />}
        />
        <SignupWithButton
          text={"Facebook"}
          icon={<FaFacebook color="#039BE5" className="signup-icon" />}
        />
        <SignupWithButton
          text={"Apple"}
          icon={<FaApple className="signup-icon" />}
        />
      </div>
      <p>
        Already have an account? <a href="#">login here</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
