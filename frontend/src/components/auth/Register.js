import React, { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Navigate, Link } from "react-router-dom";
import { Context } from "../../App";
import { isEmpty, handleInputChange } from "../../lib/checkFields";
import isAuth from "../../lib/isAuth";
const URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const Register = ({ className }) => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const usernameLabel = useRef("");

  const { isLogged, setIsLogged, message, setMessage, loading, setLoading } =
    useContext(Context);

  useEffect(() => {
    isAuth(URL, setIsLogged, setLoading);
  }, []);

  const createUser = async () => {
    if (isEmpty([user, pwd], setMessage)) return;
    setLoading(true);
    const res = await axios.post(`${URL}register`, {
      username: user,
      password: pwd,
    });
    console.log(res);
    if (res.data.success) {
      setMessage("");
      setIsLogged(true);
    } else if (res.data.status === 400) {
      setMessage("User already exists ");
    }
    setLoading(false);
  };

  if (!loading && isLogged) {
    setMessage("");
    return <Navigate to="/profile" />;
  }
  return (
    <div className={className}>
      <h1>Sign up</h1>
      <div className="register-container">
        <div className="error-message">{message}</div>
        <span ref={usernameLabel}></span>
        <input
          type="text"
          value={user}
          onChange={(e) =>
            handleInputChange(e, usernameLabel, 25, setUser, e.target.value)
          }
          placeholder="User"
        />
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Password"
        />
        <button onClick={createUser}>Sign up</button>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default Register;
