import React, { createContext, useState } from "react";
import { ConTextConsumer } from "./ConTextConsumer";
export const userContext = createContext();

export const Context = () => {
  const [user, setUser] = useState({
    userName: "Prakash",
    Age: 21,
    Course: "Computer Science",
  });

 
  //  console.log(userContext)

  return (
    <userContext.Provider value={{user}}>
    <div>
      <h1 className="text-3xl text-bold text-fuchsia-900 my-5">Context</h1>
      <ConTextConsumer />
    
    </div>


    </userContext.Provider>
  
  );
};
