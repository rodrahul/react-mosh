import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const items = [
    "An Item",
    "A second Item",
    "A third Item",
    "A fourth Item",
    "And a fifth Item",
  ];
  const clickListItem = (value: string, index: number) => {
    console.log(value + " " + index);
    setSelectedIndex(index);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <ul className="list-group">
        {items.map((value, index) => (
          <li
            key={value}
            className={`mb-2 border shadow-lg ${selectedIndex === index ? "bg-blue-500" : "bg-white"}`}
          >
            <button
              className="w-full p-4 text-left"
              onClick={() => clickListItem(value, index)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
