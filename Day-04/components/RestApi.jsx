import React, { useState } from "react";

export const RestApi = () => {
  const [data, setData] = useState();
  fetch("https://fakestoreapi.com/products/1", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((finalData) => {
      setData(finalData);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(data);
  return (
    <div className="py-15">
      <h1>welcome </h1>
      <h2>{setData.id}</h2>
    </div>
  );
};
