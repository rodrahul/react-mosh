import ListGroup from "./components/ListGroup";

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

export default App;
