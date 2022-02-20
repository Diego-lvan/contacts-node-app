import styled from "styled-components";
import Register from "./Register";
const StyledRegister = styled(Register)`
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

  .register-container {
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

  .register-container input,
  .register-container button {
    border: none;
    margin: 10px;
    height: 25px;
    padding: 3px;
    border-radius: 7px;
  }

  .register-container button {
    background: #47913f;
    color: #fff;
    width: 70px;
    height: 35px;
    font-weight: 800;
    cursor: pointer;
  }

  .register-container a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding-top: 10px;
  }

  .register-container input {
    background: #373b3d;
    color: #6c757d;
  }

  .register-container input:focus {
    background: #ffffff;
  }
`;

export default StyledRegister;
