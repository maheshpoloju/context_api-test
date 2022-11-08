import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import LoginContext from "./context/LoginContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        handleEmailChange: handleEmailChange,
        handlePasswordChange: handlePasswordChange,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
