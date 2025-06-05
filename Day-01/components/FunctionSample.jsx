export const FunctionSample = (props) => {
  return (
    <div>

        <h1 className="text-3xl font-bold p-3 mt-10">SampleFunction component</h1>
        <button onClick={props.SampleFunction} className="border py-1 px-3 rounded my-2">Click me</button>
    </div>
  )
}
