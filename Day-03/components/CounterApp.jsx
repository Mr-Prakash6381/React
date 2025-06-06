import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <h1>Click to Unlock Rewards {count}</h1>
      <button className="border rounded px-2 my-3" onClick={handleIncrease}>
        Click Me !
      </button>
      {count >= 10 ? (
        <p className="text-green-600">You Unlocked a 10% Discount</p>
      ) : (
        <p className="text-red-600">Click 10 time to unlock Rewated</p>
      )}
      {count >= 20 && (
        <p className="text-green-800">
          You a click <span className="text-red-950">Master </span>{" "}
        </p>
      )}
    </div>
  );
};
