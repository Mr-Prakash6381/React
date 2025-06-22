import React, { useState } from "react";

export const Home = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };
  console.log(formInput)

 
  return (
    <div>
      <form
        action="#"
        className="border w-1/2 mx-auto p-5 rounded flex flex-col justify-center items-center"
      >
        <input
          type="text"
          placeholder="Name"
          className="border outline-none px-2  my-2 rounded  "
          value={formInput.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          placeholder="Age"
          className="border outline-none px-2  my-2 rounded  "
          value={formInput.age}
          onChange={handleChange}
          name="age"
        />
        <input
          type="email"
          placeholder="Email"
          className="border outline-none px-2  my-2 rounded  "
          value={formInput.email}
          onChange={handleChange}
          name="email"
        />
        <button className="border rounded px-2 mt-5 w-1/2 ">Add</button>
      </form>
    </div>
  );
};
