import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { Context } from "../../App";
import isAuth from "../../lib/isAuth";
import { isEmpty } from "../../lib/checkFields";
const URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const Login = ({ className }) => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const { isLogged, setIsLogged, message, setMessage, loading, setLoading } =
    useContext(Context);

  const loginUser = async () => {
    if (isEmpty([user, pwd], setMessage)) return;
    try {
      const res = await axios.post(URL, { username: user, password: pwd });
      console.log(res);
      setIsLogged(true);
      setMessage("");
      setLoading(false);
    } catch (error) {
      return setMessage("Wrong credentials");
    }
  };

  useEffect(() => {
    setMessage("");
    isAuth(URL, setIsLogged, setLoading);
  }, []);

  if (loading) return <span>Loading...</span>;
  if (isLogged) return <Navigate to="/profile" />;

  return (
    <>
      <div className={className}>
        <h1>Sign in</h1>
        <div className="login-container">
          <div className="error-message">{message}</div>

          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="User"
          />
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Password"
          />
          <button onClick={loginUser}>Login</button>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
