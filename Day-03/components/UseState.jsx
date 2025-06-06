import { useState } from "react";

export const UseState = () => {
  const [count, setCount ] = useState(0);
  const Increase=()=>{
    setCount(count+1)
  }
  const Decrease=()=>{
    setCount(count-1)
  }
  return <div>


<h1 className="text-2xl ">Numbher of items in the cart : {count}</h1>

<div className="flex ">
    <button onClick={Increase} className="border rounded px-5 mx-2 my-5">Increase</button>
<button onClick={Decrease}  className="border rounded px-5 mx-2 my-5">Decrease</button>
</div>

  </div>;
};
