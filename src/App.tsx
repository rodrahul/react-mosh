import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York, USA",
    "Tokyo, Japan",
    "Paris, France",
    "Sydney, Australia",
    "Cape Town, South Africa",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
