import styled from "styled-components";
import Login from "./Login";
const StyledLogin = styled(Login)`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #22242e;
  }

  h1 {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .login-container {
    margin: 10px auto;
    display: -ms-grid;
    display: grid;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
    padding: 15px 10px;
    background: #10131c;
    width: 80%;
    border-radius: 10px;
    width: auto 80%;
  }

  .login-container input,
  .login-container button {
    border: none;
    margin: 10px;
    height: 25px;
    padding: 3px;
    border-radius: 7px;
  }

  .login-container button {
    background: #47913f;
    color: #fff;
    width: 70px;
    height: 35px;
    font-weight: 800;
    cursor: pointer;
  }

  .login-container a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding-top: 10px;
  }

  .login-container input {
    background: #373b3d;
    color: #6c757d;
  }

  .login-container input:focus {
    background: #ffffff;
  }
`;

export default StyledLogin;
