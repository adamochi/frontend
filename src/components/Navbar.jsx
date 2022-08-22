import React from "react";
import { Link } from "react-router-dom";
import "./someStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar  navv">
      <Link className="navLinkk" to={"/"}>
        <h4>Home</h4>
      </Link>
      <Link className="navLinkk" to={"/notes"}>
        <h4>Notes</h4>
      </Link>
      <Link className="navLinkk" to={"/create"}>
        <h4>Create</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
