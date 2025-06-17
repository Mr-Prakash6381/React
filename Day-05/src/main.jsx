import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Redux } from "../components/Redux";

// import { Router } from "../components/Router";
// import { UseRedues } from "../components/UseRedues";
// import { UseContext } from "../components/UseContext";
// import { UseCallback } from '../components/UseCallback'

createRoot(document.getElementById("root")).render(
  <StrictMode>
  

    {/* <UseCallback/> */}
    {/* <UseContext /> */}
{/* 
    <UseRedues /> */}
{/* 
    <Router/> */}

    <Redux/> 

   
  </StrictMode>
);
 