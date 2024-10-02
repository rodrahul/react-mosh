export interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

function Alert(alert: AlertProps) {
  let alertClass = "";

  switch (alert.type) {
    case "success":
      alertClass = "bg-green-100 border border-green-400 text-green-700";
      break;
    case "error":
      alertClass = "bg-red-100 border border-red-400 text-red-700";
      break;
    case "warning":
      alertClass = "bg-yellow-100 border border-yellow-400 text-yellow-700";
      break;
    case "info":
      alertClass = "bg-blue-100 border border-blue-400 text-blue-700";
      break;
  }

  return (
    <div className={`mb-4 rounded-md p-4 ${alertClass}`}>
      <span className="font-bold">{alert.message}</span>
    </div>
  );
}

export default Alert;

/**
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
 
 */
