import React, { useCallback, useState } from "react";
import { List } from "./List";

export const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = () => {
    backgroundColor: dark ? "black" : "white";
    color: dark ? "white" : "black";
  };

  const getItems =useCallback( () => {
    return [number + 1, number + 2, number + 3];
  },[number])

  return (
    <div  className="px-20 text-2xl" style={{ theme }}>
      <input
        type="number"
        className="my-3 rounded border"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        className="border rounded px-2"
        onClick={() => setDark((curr) => !curr)}
      >
        Toggle Thems
      </button>

      <List getItems={getItems} />
    </div>
  );
};
