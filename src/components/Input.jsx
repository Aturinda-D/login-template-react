import React from "react";

const Input = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
      {props.icon && props.icon}
    </div>
  );
};

export default Input;
