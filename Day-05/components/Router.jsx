import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RouterUsers } from "./RouterUsers";
import { RouterAbout } from "./RouterAbout";
import { RouterContact } from "./RouterContact";
import { RouterNavbar } from "./RouterNavbar";


export const Router = () => {
  return (
      <BrowserRouter>
      <RouterNavbar/>
        <Routes>
          <Route path="/" element={<RouterContact />} />
          <Route path="/about" element={<RouterAbout />} />
          <Route path="/users" element={<RouterUsers />} />
        </Routes>
      </BrowserRouter>
  );
};
