import { Button, MantineProvider } from "@mantine/core";
import Alert, { AlertProps } from "./components/Alert";
import MyButton from "./components/MyButton";
import { IconPhoto } from "@tabler/icons-react";
import "@mantine/core/styles.css";

function App() {
  const alertData: AlertProps[] = [
    { type: "success", message: "This is a success alert!" },
    { type: "error", message: "This is an error alert!" },
    { type: "warning", message: "This is a warning alert!" },
    { type: "info", message: "This is an info alert!" },
  ];
  return (
    <>
      <MantineProvider>
        <div>
          {alertData.map((alert, index) => (
            <Alert
              key={index}
              type={alert.type}
              message={alert.message}
            ></Alert>
          ))}
        </div>

        <div className="p-4">
          <MyButton type="success" buttonText="Dark"></MyButton>
        </div>

        {/* Using Mantine */}
        <div>
          <Button variant="filled" onClick={() => console.log('clicked')}>Button</Button>
        </div>
        <Button leftSection={<IconPhoto size={15} />} variant="default">
          Gallery
        </Button>
      </MantineProvider>
    </>
  );
}

export default App;
