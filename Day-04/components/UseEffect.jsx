import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This effect will run after every render");
  }, [count]);





  console.log("Intial Render");
  return (
    <div className="py-5">
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 border rounded-md bg-green-500 text-white  border-amber-950 "
      >
        Increase
      </button>
      <h1 className="py-5 text-blue-800">Value : {count}</h1>
    </div>
  );
};
