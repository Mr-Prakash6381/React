import React, { createContext } from "react";
import { Container } from "./Container";

export const myContext = createContext();

export const UseContext = () => {
  const value = 100;
  return (
    <myContext.Provider value={{ value }}>
      UseContext
      <Container />
    </myContext.Provider>
  );
};
