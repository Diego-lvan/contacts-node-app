import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../App";
axios.defaults.withCredentials = true;
const URL = process.env.REACT_APP_BASE_URL;

const Navbar = ({ items, showLogout, className }) => {
  const { setLogout } = useContext(Context);

  const logOut = async () => {
    const res = await axios.post(`${URL}logout`);
    setLogout(true);
    console.log(res);
  };
  return (
    <div className={className}>
      {items.map(({ title, path }) => (
        <Link key={title} to={path}>
          {title}
        </Link>
      ))}
      {showLogout && <span onClick={logOut}>Logout</span>}
    </div>
  );
};

export default Navbar;
