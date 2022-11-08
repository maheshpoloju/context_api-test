import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LoginContext from "../../context/LoginContext";
import "./index.css";

function Login() {
  const context = useContext(LoginContext);
  const { email, password, handleEmailChange, handlePasswordChange } = context;
  let navigate = useNavigate();

  const handleChangePassword = (e) => {
    handlePasswordChange(e.target.value);
  };
  const handleChangeEmail = (e) => {
    handleEmailChange(e.target.value);
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={handleChangePassword}
          placeholder="Password"
        />
      </>
    );
  };
  const renderEmailField = () => {
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="email-input-field"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
        />
      </>
    );
  };

  const handleFormSave = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={handleFormSave}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
