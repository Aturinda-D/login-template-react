import React from "react";

const LoginButton = ({ text, ...props }) => {
  return (
    <button className="reg-button" {...props}>
      {text}
    </button>
  );
};

export default LoginButton;
