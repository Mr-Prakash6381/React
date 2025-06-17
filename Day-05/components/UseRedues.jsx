import React, { useReducer, useState } from "react";

export const UseRedues = () => {



  function reduceFn(state, action) {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };

      case "Decrement":
        return { count: state.count - 1 };
    }
  }
  const [state, dispatch] = useReducer(reduceFn, { count: 1 });

  const Increment = () => {
    dispatch({ type: "Increment" });
  };

  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };
  console.log(state);
  return (
    <div className="text-center">
      <h1 className="py-2 my-5 text-4xl">{state.count}</h1>
      <button
        className="border px-2 py-2 mx-2 rounded bg-green-700 text-white "
        onClick={Increment}
      >
        Increment
      </button>
      <button
        className="border px-2 py-2 mx-2 rounded bg-red-700 text-white "
        onClick={Decrement}
      >
        Decrement
      </button>
    </div>
  );
};
