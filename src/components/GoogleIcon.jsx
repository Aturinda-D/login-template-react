import React from "react";

const GoogleIcon = ({ size = "15", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.2 0 5.9 1.1 8 3.1l6-6C34.9 2.5 29.8 0 24 0 14.8 0 6.9 5.8 3.5 14.1l7 5.4C12.8 13.1 17.9 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.1 24.5c0-1.4-.1-2.4-.3-3.5H24v7.5h12.4c-.5 2.8-2.1 5.2-4.6 6.8l7 5.4c4.1-3.7 6.3-9.2 6.3-16.2z"
    />
    <path
      fill="#FBBC05"
      d="M10.5 28.3c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7-5.4C2.4 17.5 1 20.6 1 24s1.4 6.5 3.5 9.3l7-5z"
    />
    <path
      fill="#34A853"
      d="M24 47c6.5 0 12-2.1 16-5.7l-7-5.4c-2 1.4-4.5 2.2-7.3 2.2-6.1 0-11.3-4.1-13.1-9.5l-7 5.3C6.9 42.2 14.8 47 24 47z"
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

export default GoogleIcon;
