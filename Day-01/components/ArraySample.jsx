export const ArraySample = (props) => {
  const { items } = props;
  return (
    <div>
      <h1 className="text-3xl font-bold p-3 mt-10">ArraySample component</h1>
      <h1>List Items</h1>
      <ul>
        {items.map((item) => (
          <li>
            {item.id} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
