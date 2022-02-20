import styled from "styled-components";
import EditContact from "./EditContact";
const StyledEditContact = styled(EditContact)`
  .editContactContainer {
    background: var(--secondaryColor);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    input {
      background: #373b3d;
      border: none;
      margin: 0 0 10px 0;
      height: 25px;
      border-radius: 5px;
      padding: 3px;
      color: #6c757d;
    }
    input:focus {
      background: #ffff;
    }
    button {
      background: var(--greenColor);
      border: none;
      border-radius: 5px;
      height: 30px;
      padding: 0 3px;
      color: var(--fontColor);
      width: auto;
      cursor: pointer;
    }
  }
`;

export default StyledEditContact;
