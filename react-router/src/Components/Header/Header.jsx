import React from "react";
import "./Header.css"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact us</Link>
        <NavLink to="/users">Users</NavLink>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Contact">Contact</a> */}
      </nav>
    </div>
  );
};

export default Header;
