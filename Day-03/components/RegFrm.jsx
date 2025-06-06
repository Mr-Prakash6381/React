import { useState } from "react";

export const RegFrm = () => {
  const [user, setUser] = useState("Preveen");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [isMarried, setIsMarried] = useState(true);
  const changeHandler = (data) => {
    const name = data.target.name;
    const value =
      data.target.type === "checkbox " ? data.target.checked : e.target.value;
      setUser=({...user,[name]:value})
  };
  return (
    <div>
      <table className="border rounded-2xl">
        <tbody>
          <tr className="border ">
            <th className="border p-5">Name</th>
            <th className="border p-5">Age</th>
            <th className="border p-5">Gender</th>
            <th className="border p-5">IsMarried</th>
          </tr>
          <tr className="border text-center">
            <td className="border p-5">{user}</td>
            <td className="border p-5">{age}</td>
            <td className="border p-5">{gender}</td>
            <td className="border p-5">{isMarried ? "yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <form className="my-10 flex flex-col w-1/2">
        <input
          type="text"
          placeholder="Full Name"
          className="border px-2  my-2"
          name="name"
          value={user}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Age"
          className="border px-2  my-2"
          value={age}
           onChange={changeHandler}
        />
        <div>
          <label for="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={gender == "Male"}
              value="male"
               onChange={changeHandler}
            />
            Male
          </label>
          <label className="mx-2" for="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={gender == "Female"}
              value="female"
               onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label for="isMarried">
          <input type="checkbox" id="isMarried" checked={isMarried}  onChange={changeHandler}/>
          Is Married
        </label>
      </form>
    </div>
  );
};
