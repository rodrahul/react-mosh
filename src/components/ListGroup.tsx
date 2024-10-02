import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // State to track which item is selected
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListClick = (value: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(value);
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
              onClick={() => handleListClick(value, index)}
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

/**

function App() {
  let items = [
    "New York, USA",
    "Tokyo, Japan",
    "Paris, France",
    "Sydney, Australia",
    "Cape Town, South Africa",
  ];

  const onListItemSelect = (item: string) => {
    console.log("Selected Item: " + item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={onListItemSelect}
      ></ListGroup>
    </div>
  );
}

*/
