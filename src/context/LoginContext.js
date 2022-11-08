import React from "react";

const LoginContext = React.createContext({
  email: "",
  password: "",
  handleEmailChange: () => {},
  handlePasswordChange: () => {},
});

export default LoginContext;
