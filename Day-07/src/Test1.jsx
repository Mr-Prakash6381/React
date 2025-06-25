import { useQuery } from "@tanstack/react-query";
import React from "react";

const Test1 = () => {
  const repo1 = useQuery({
    queryKey: "githubData",
    queryFn: apiCall,
  });

  async function apiCall() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&apiKey=66f0d2224f7b4b6ea9ffc433dc855a03"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  if (repo1.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (repo1.error) {
    return <h1>An error occurred: {error.message}</h1>;
  }
  return (
    <div>
      <h1>Test1</h1>
      <pre>{JSON.stringify(repo1.data, null, 2)}</pre>

    </div>
  );
};

export default Test1;
