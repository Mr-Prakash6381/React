import React from "react";
import { Link } from "react-router-dom";

export const RouterNavbar = () => {
  return (
    <nav className="flex p-5 ">
      <h1>Logo</h1>
      <ul className="ml-auto">
         <Link to="/" className="px-3 border rounded mx-2 ">
          Home
        </Link>
        <Link to="/users" className="px-3 border rounded mx-2 ">
          User
        </Link>
        <Link to="/about" className="px-3 border rounded mx-2 ">
          About
        </Link>
      </ul>
    </nav>
  );
};
