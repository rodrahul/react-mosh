import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "An Item",
    "A second Item",
    "A third Item",
    "A fourth Item",
    "And a fifth Item",
  ];

  const clickListItem = (value: string, event: MouseEvent) => {
    console.log(value);
    console.log(event);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <ul className="list-group">
        {items.map((value) => (
          <li key={value} className="mb-2 border p-4 shadow-lg">
            <button
              className="w-full text-left"
              onClick={(event) => clickListItem(value, event)}
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
