import React, { createContext, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Login from "./components/auth/Login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register.css";
import Profile from "./components/profile/Profile.css";
import Contacts from "./components/contacts/Contacts.css";
import AddContact from "./components/contacts/AddContact.css";
import EditContact from "./components/editContact/EditContact.css";

export const Context = createContext();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [logout, setLogout] = useState(false);
  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        message,
        setMessage,
        loading,
        setLoading,
        logout,
        setLogout,
      }}
    >
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/contacts/add" element={<AddContact />} />
          <Route path="/contact/edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
