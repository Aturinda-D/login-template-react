import React from "react";

const SignupWithButton = ({ icon, text, ...props }) => {
  return (
    <div>
      {icon && icon}
      <button className="signup-with" {...props}>
        Sign up with {text}
      </button>
    </div>
  );
};

export default SignupWithButton;
