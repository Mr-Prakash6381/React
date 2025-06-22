import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex py-5 bg-green-500 text-white mb-15">
      <h1 className="px-5 text-2xl ">Logo</h1>
      <ul className="ml-auto">
        <Link to="/" className="border rounded px-2 mx-2">Home</Link>
        <Link to="/contect" className="border rounded px-2 mx-2">Contect</Link>
         <Link to="/users" className="border rounded px-2 mx-2">Users</Link>
        <Link to="/about" className="border rounded px-2 mx-2">About</Link>
       
      </ul>
    </div>
  );
};
