import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  // Initialize users state as an array
  const [users, setUsers] = useState([]);

  const [buttonState, setButtonState] = useState("add");

  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new user to users array
    setUsers((prevUsers) => [...prevUsers, userInfo]);
    // Reset form
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  const deletData = (id) => {
    setUsers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const updateData = () => {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === userInfo.id) {
          return userInfo;
        }
        return user;
      });
    });
    calcelButton()
  };

  const editData = (user) => {
    setUserInfo(user);
    setButtonState("update");
  };

  const calcelButton = () => {
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
    setButtonState("add");
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="shadow-xl flex flex-col p-10 border border-none rounded justify-center items-center mt-10"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="border-none outline-0 px-2 py-2 my-2 rounded bg-white"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border-none outline-0 px-2 py-2 my-2 rounded bg-white"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          className="border-none outline-0 px-2 py-2 my-2 rounded bg-white"
          name="age"
          value={userInfo.age}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          className="border-none outline-0 px-2 py-2 my-2 rounded bg-white"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />

        {buttonState === "add" ? (
          <button
            type="submit"
            className="cursor-pointer border shadow-xl rounded w-1/2 mt-5 p-2 bg-red-600 text-white hover:bg-green-600 border-none"
          >
            Add
          </button>
        ) : (
          <div>
            <button
              type="submit"
              onClick={updateData}
              className="cursor-pointer border shadow-xl rounded mx-2 mt-5 p-2  bg-yellow-600 text-white hover:bg-yellow-400 border-none"
            >
              Update
            </button>
            <button
              type="submit"
              onClick={calcelButton}
              className="cursor-pointer border shadow-xl rounded  mt-5  p-2 bg-red-600 text-white hover:bg-green-600 border-none"
            >
              Calncel
            </button>
          </div>
        )}
      </form>

      <div className="mt-20 w-full max-w-4xl">
        <table className="w-full  ">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2 ">Age</th>
              <th className="px-4 py-2 ">Email</th>
              <th className="px-4 py-2 ">Phone</th>
              <th className="px-4 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2  text-center">{user.name}</td>
                <td className="px-4 py-2  text-center">{user.age}</td>
                <td className="px-4 py-2  text-center">{user.email}</td>
                <td className="px-4 py-2  text-center">{user.phone}</td>
                <td>
                  <button
                    onClick={() => editData(user)}
                    className="text-green-600 font-bold border-none bg-green-200 rounded mx-2  px-2  cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletData(user.id)}
                    className="text-red-500 font-bold px-2 border-none rounded bg-red-200 cursor-pointer"
                  >
                    Delect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
