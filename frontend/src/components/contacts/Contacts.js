import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../App";
import Navbar from "../navbar/Navbar.css";
import deleteContact from "../../lib/deleteContact";
const URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;
const itemsNavbar = [
  { title: "Profile", path: "/profile" },
  { title: "Add contact", path: "/contacts/add" },
];

const Contacts = ({ className }) => {
  const [contacts, setContacts] = useState([]);
  const [contactChanged, setContactChanged] = useState(false);
  const {
    isLogged,
    setIsLogged,
    loading,
    setLoading,
    setMessage,
    logout,
    setLogout,
  } = useContext(Context);

  const fetchContacts = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}contacts`);
    if (res.data.status === 401) {
      setLoading(false);
      return setIsLogged(false);
    }
    if (res.data.contacts !== undefined) {
      setContacts(res.data.contacts);
    }
    setIsLogged(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, [contactChanged]);

  if (loading) return <span>Loading...</span>;
  if ((!isLogged && !loading) || logout) {
    setLogout(false);
    setMessage("");
    return <Navigate to="/" />;
  }
  if (contacts.length === undefined || contacts.length === 0) {
    return (
      <>
        <Navbar items={itemsNavbar} showLogout={true} />
        <span>No contacts saved yet</span>
        <Link to={"/contacts/add"}>Add a new one</Link>
      </>
    );
  }

  return (
    <div className={className}>
      <Navbar items={itemsNavbar} showLogout={true} />

      {contacts.map(({ contact_name, id, contact_number }) => (
        <div className="contact" key={id}>
          <span className="name">{contact_name}</span>
          <span className="number">{contact_number}</span>
          <div className="buttons">
            <Link to={`/contact/edit/${id}`}>Edit</Link>
            <button
              onClick={(e) =>
                deleteContact(
                  e,
                  contact_number,
                  setContactChanged,
                  contactChanged
                )
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
