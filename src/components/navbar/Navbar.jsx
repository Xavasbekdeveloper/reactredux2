import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let data = useSelector((state) => state.users.data);
  const followingCount = data.filter((user) => user.follow).length;
  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{data.length}</sup>
      </NavLink>
      <NavLink to={"/following"}>
        Following <sup>{followingCount}</sup>
      </NavLink>
    </div>
  );
}

export default Navbar;
