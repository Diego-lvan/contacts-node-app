import styled from "styled-components";
import AddContact from "./AddContact";
const StyledAddContact = styled(AddContact)`
  input {
    background: #373b3d;
    border: none;
    margin: 0 0 10px;
    height: 25px;
    border-radius: 5px;
    padding: 3px;
  }
  input:focus {
    background: #ffff;
  }
  .container {
    display: grid;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0px;
    background: var(--secondaryColor);
    justify-items: center;
    border-radius: 8px;
  }
  h1 {
    color: var(--fontColor);
    text-align: center;
    margin-bottom: 15px;
  }
  button {
    background: var(--greenColor);
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 3px;
    color: var(--fontColor);
    cursor: pointer;
  }
`;

export default StyledAddContact;
