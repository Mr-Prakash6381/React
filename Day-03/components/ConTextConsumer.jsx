import React, { useContext } from "react";
import { userContext } from "./Context";
export const ConTextConsumer = () => {
  const { user } = useContext(userContext);
  // console.log(user)

  return (
    <div>
      <h1>UserName : {user.userName}</h1>
      <p>Age : {user.Age}</p>
      <p>Course : {user.Course}</p>
    </div>
  );
};
