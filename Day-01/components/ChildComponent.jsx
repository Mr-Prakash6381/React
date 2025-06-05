 
const ChildComponent = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-3 mt-10">ChildComponent component</h1>
      
      
      {props.children}</div>
  )
}

export default ChildComponent