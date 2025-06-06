import { useState } from "react";

export const UserDetails = () => {
  const [userName, setUserName] = useState("Ram");
  const [userAge, setUserAge] = useState(20);

  const updateUserName = () => {
    // setUserName("Sam");
    userName == "Ram" ? setUserName("PRAKASH") : setUserName("Ram");
  };
  const updateUserAge = () => {
    userAge == 20 ? setUserAge(25) : setUserAge(20);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">User Details</h1>
      <h5>{userName}</h5>
      <h5>{userAge}</h5>
      <button
        className="border px-2 py-2 mx-2 rounded"
        onClick={updateUserName}
      >
        Update User Name
      </button>
      <button className="border px-2 py-2 mx-2 rounded" onClick={updateUserAge}>
        Update User Age
      </button>
    </div>
  );
};
