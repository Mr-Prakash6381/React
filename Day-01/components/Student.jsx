const Student = (props) => {
  return (

    <div className="py-3">
      <table className="border">
        <tr className="border">
          <th className="p-2 border ">Name</th>
          <th className="p-2 border ">Age</th>
          <th className="p-2 border ">isMaried</th>
        </tr>
        <tr className="text-center">
          <td className="p-2 border">{props.name}</td>
          <td className="p-2 border">{props.age}</td>
          <td className="p-2 border">{props.isMarried ? "Yes" : "No"}</td>
        </tr>
      </table>
    </div>
  );
};

Student.defaultProps = {
  name: "No Name",
  age: 0,
  isMarried: false,
};

export default Student;


