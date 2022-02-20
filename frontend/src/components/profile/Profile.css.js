import styled from "styled-components";
import Profile from "./Profile";
const StyledProfile = styled(Profile)`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .profile {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
  }

  .profile h2 {
    text-align: center;
  }

  .profile .welcome {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #10131c;
    width: 80%;
    height: 35vh;
    margin: 18px auto;
    border-radius: 13px;
  }

  .navbar a,
  span {
    display: inline-block;
    color: #ffffff;
    font-size: 19px;
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default StyledProfile;
