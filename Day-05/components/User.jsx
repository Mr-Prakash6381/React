import React, { useContext } from "react";
import { myContext } from "./UseContext";

export const User = () => {
  const { value } = useContext(myContext);

  return (
    <div>
      
      <h1>User : {value}</h1>
    </div>
  );
};
