import Alert, { AlertProps } from "./components/Alert";

function App() {
  const alertData: AlertProps[] = [
    { type: "success", message: "This is a success alert!" },
    { type: "error", message: "This is an error alert!" },
    { type: "warning", message: "This is a warning alert!" },
    { type: "info", message: "This is an info alert!" },
  ];
  return (
    <div>
      {alertData.map((alert, index) => (
        <Alert key={index} type={alert.type} message={alert.message}></Alert>
      ))}
    </div>
  );
}

export default App;
