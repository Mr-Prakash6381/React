import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

export const ListRender = () => {
  let [items, setItems] = useState([
    { id: 1, lable: "Html & Css", checked: true },
    {
      id: 2,
      lable: "JavaScript",
      checked: false,
    },
    { id: 3, lable: "React & Tailwind", checked: true },
  ]);

  const [newItem, setNewItem] = useState("");
  const [edit, setEdit] = useState(false);
  const [curentElementId, setcurentElementId] = useState(null);

  const handleChecked = (id) => {
    const newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setNewItem(newListItems);
  };
  const handleEdite = (id) => {
    let listItems = items.find((item) => item.id === id);
    // console.log(listItems);
    setNewItem(listItems);
    setEdit(true);
    setcuttentElementId(id);
  };
  const handleDelect = (id) => {
    const newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return {
          ...item,
          id: index + 1,
        };
      });
    setItems(newItems);
  };
  const handleAdd = () => {
    if (edit) {
      const newListItems = items.map((item) => {
        return item.id === curentElementId
          ? { ...item, lable: newListItems }
          : item;
      });
      setItems(newListItems);
      setcurentElementId(null);
      setNewItem('')
      setEdit(false)
    } else {
      setItems([
        ...items,
        { id: items.length + 1, lable: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };
  return (
    <div>
      <input
        className="border px-3 rounded-2xl outline-0 my-5"
        placeholder="Add New Items"
        type="text"
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value);
        }}
      />
      <button onClick={handleAdd} className="border rounded mx-2 px-2">
        {edit ? "Save" : "Add"}
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="flex flex-row gap-5">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.lable}</label>
              <MdOutlineEdit
                role="button"
                tabIndex={0}
                className="hover:text-green-700 outline-0"
                onClick={() => handleEdite(item.id)}
              />
              <RiDeleteBin6Fill
                role="button"
                tabIndex={0}
                className="hover:text-red-500 outline-0 "
                onClick={() => handleDelect(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
