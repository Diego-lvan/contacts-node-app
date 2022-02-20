import styled from "styled-components";
import Navbar from "./Navbar";
const StyledNavbar = styled(Navbar)`
  a,
  span {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
  }
  background: #343a40;
  height: 50px;
  margin-bottom: 20px;
`;

export default StyledNavbar;
