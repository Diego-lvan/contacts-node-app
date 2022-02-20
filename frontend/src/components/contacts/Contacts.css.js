import styled from "styled-components";
import Contacts from "./Contacts";
const AddContactStyled = styled(Contacts)`
  display: grid;

  .contact {
    color: var(--fontColor);
    background: var(--secondaryColor);
    border-radius: 5px;
    padding: 18px 0px;
    width: 65%;
    margin: 0 auto 24px auto;
    display: grid;
    justify-content: center;
    .buttons {
      display: flex;
      justify-content: space-between;
    }
    a,
    button {
      color: var(--fontColor);
      display: inline-block;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
    }
    button {
      background: red;
      border: none;
    }
    a {
      background: #6c757d;
      text-decoration: none;
      margin-right: 10px;
    }
  }

  .name {
    font-size: 27px;
  }
  .number {
    font-size: 15px;
    margin-top: 3px;
    margin-bottom: 8px;
  }
`;

export default AddContactStyled;
