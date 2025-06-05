import ChildComponent from "../components/ChildComponent";
import Student from "../components/Student";
import { ArraySample } from "../components/ArraySample";
import MultiTypeComponent from "../components/MultiTypeComponent";
import { FunctionSample } from "../components/FunctionSample";
import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Items 1" },
    { id: 2, name: "Items 2" },
    { id: 3, name: "Items 3" },
  ];

  const SampleFunction = () => {
    alert("Clicked me !!");
  };
  return (
    <div className="container p-20  ">
      <h1 className="text-2xl font-bold text-amber-600 ">
        Welcome Partices First Day{" "}
      </h1>
      <Student name="prakash" age={21} isMarried={true} />
      <Student name="Lokesh" age={31} isMarried={false} />
      <Student />

      <ChildComponent>
        <p>This is a sample paragram 1</p>
        <p>This is a sample paragram 2</p>
      </ChildComponent>

      <ArraySample items={items} />

      <h1 className="text-3xl font-bold p-3 mt-10">
        MultiTypeComponent component
      </h1>
      <MultiTypeComponent value="Welcome" />
      <MultiTypeComponent value={21} />
      <MultiTypeComponent value={true} />

      <FunctionSample SampleFunction={SampleFunction} />
    </div>
  );
}

export default App;
