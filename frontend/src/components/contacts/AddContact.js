import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../App";
import Navbar from "../navbar/Navbar.css";
import isAuth from "../../lib/isAuth";
import { handleInputChange, isEmpty } from "../../lib/checkFields";

const URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;
const navbarItems = [
  { title: "Profile", path: "/profile" },
  { title: "Contacts", path: "/contacts" },
];

const AddContact = ({ className }) => {
  const [contactName, setContactName] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const nameRef = useRef("");
  const numRef = useRef("");
  const {
    message,
    setMessage,
    setIsLogged,
    isLogged,
    setLoading,
    loading,
    logout,
    setLogout,
  } = useContext(Context);

  useEffect(() => {
    isAuth(URL, setIsLogged, setLoading);
  }, []);

  const addContact = async () => {
    setSuccess(false);
    setMessage("");
    const res = await axios.post(`${URL}contacts/add`, { number, contactName });
    if (res.data.status && res.data.status === 201) return setSuccess(true);

    if (res.data.status === 409) setMessage("Contact already exists");
  };

  if (loading) return <h2>Loading...</h2>;
  if (!isLogged || logout) {
    setLogout(false);
    return <Navigate to={"/"} />;
  }
  if (success) return <Navigate to={"/contacts"} />;

  return (
    <div className={className}>
      {message}
      <Navbar items={navbarItems} showLogout={true} />
      <h1>Add contact</h1>
      <div className="container">
        <span ref={nameRef}></span>
        <input
          type="text"
          value={contactName}
          onChange={(e) =>
            handleInputChange(e, nameRef, 40, setContactName, e.target.value)
          }
          placeholder="Name"
        />
        <span ref={numRef}></span>
        <input
          type="text"
          value={number}
          onChange={(e) =>
            handleInputChange(e, numRef, 10, setNumber, e.target.value)
          }
          placeholder="Number"
        />
        <button onClick={addContact}>Add contact</button>
      </div>
    </div>
  );
};

export default AddContact;
