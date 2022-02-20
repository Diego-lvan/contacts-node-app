import React, { useEffect, useState, useContext } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Context } from "../../App";
import { Navigate } from "react-router-dom";
const URL = process.env.REACT_APP_BASE_URL;

const Profile = ({ className }) => {
  const [username, setUsername] = useState(null);
  axios.defaults.withCredentials = true;
  const { isLogged, setIsLogged, loading, setLoading, logout, setLogout } =
    useContext(Context);

  const fetchUsername = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}profile`);
    if (res.data.status === 401) {
      setIsLogged(false);
      return setLoading(false);
    }
    setIsLogged(true);
    setUsername(res.data.username);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  if ((!isLogged && !loading) || logout) {
    console.log("hay bug");
    setLogout(false);
    return <Navigate to="/" />;
  }
  return (
    <div className={className}>
      <div className="profile">
        <div className="navbar">
          <Navbar
            showLogout={true}
            items={[
              { title: "Contacts", path: "/contacts" },
              { title: "Add contact", path: "/contacts/add" },
            ]}
          />
        </div>
        <div className="welcome">
          <h2>Welcome {username}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
