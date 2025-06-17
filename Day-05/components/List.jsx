import React, { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("setting Items");
  }, [getItems]);
  return (
    <div>
      {items.map((items, index) => {
       
       return  <p key={index}>{items}</p>;
      })}
    </div>
  );
};
