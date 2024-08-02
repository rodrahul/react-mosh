import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const clickListItem = (value: string, index: number) => {
    console.log(value + " " + index);
    setSelectedIndex(index);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-2 text-center text-lg font-bold">{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
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
