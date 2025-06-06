import { useState } from "react";

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div className="text-center">
      <h1>{advice}</h1>
      <button
        className="border rounded px-2 py-2 bg-cyan-800 text-white  my-5 "
        onClick={getAdvice}
      >
        Get Advice
      </button>
    </div>
  );
};
