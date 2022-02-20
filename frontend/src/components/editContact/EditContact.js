import React, { useEffect, useContext, useState, useRef } from "react";
import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../../App";
import Navbar from "../navbar/Navbar.css";
import { handleInputChange, isEmpty } from "../../lib/checkFields";

const URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;
const itemsNavbar = [
  { title: "Profile", path: "/profile" },
  { title: "Add contact", path: "/contacts/add" },
];

const EditContact = ({ className }) => {
  const { id } = useParams();
  const [contact, setContact] = useState(undefined);
  const [isEdited, setIsEdited] = useState(false);
  const nameRef = useRef("");
  const numRef = useRef("");
  const {
    isLogged,
    setIsLogged,
    loading,
    setLoading,
    message,
    setMessage,
    logout,
    setLogout,
  } = useContext(Context);

  const getContact = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}contacts/${id}`);
    if (!res.data.success) {
      setMessage("Contact does not exists");
      setLoading(false);
      return;
    }
    setMessage("");
    setContact(res.data.contact);
    setLoading(false);
  };

  const updateContact = async () => {
    const { contact_number, contact_name } = contact;
    if (!contact_number || !contact_name) {
      return setMessage("Empty fields");
    }
    setLoading(true);
    const res = await axios.put(`${URL}contact/edit`, {
      number: contact_number,
      contactName: contact_name,
      id,
    });
    if (res.data.status === 401) return setIsLogged(false);
    setIsLogged(true);
    if (res.data.status !== 204) return setMessage("Something went wrong");
    setMessage("");
    setIsEdited(true);
    setLoading(false);
  };

  useEffect(() => {
    getContact();
  }, []);
  if (loading) return <></>;
  if ((!loading && !isLogged) || logout) {
    setLogout(false);
    return <Navigate to="/" />;
  }
  if (!loading && contact === undefined) return <h2>{message}</h2>;
  if (isEdited) return <Navigate to="/contacts" />;
  return (
    <div className={className}>
      <Navbar items={itemsNavbar} showLogout={true} />
      <div className="editContactContainer">
        <h2>{message}</h2>
        <span ref={nameRef}></span>
        <input
          type="text"
          value={contact.contact_name}
          onChange={(e) =>
            handleInputChange(e, nameRef, 40, setContact, {
              ...contact,
              contact_name: e.target.value,
            })
          }
        />
        <span ref={numRef}></span>
        <input
          type="text"
          value={contact.contact_number}
          onChange={(e) =>
            handleInputChange(e, numRef, 10, setContact, {
              ...contact,
              contact_number: e.target.value,
            })
          }
        />
        <button onClick={updateContact}>Edit contact </button>
      </div>
    </div>
  );
};

export default EditContact;
