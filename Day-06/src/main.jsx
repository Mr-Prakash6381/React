import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "../components/Home";
import { Contect } from "../components/Contect";
import { About } from "../components/About";
import { Navbar } from "../components/Navbar";
import { ErrorPage } from "../components/ErrorPage";
import { Users } from "../components/Users";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <div></div>
  // </StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contect" element={<Contect />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
);
