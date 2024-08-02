import { Alert, Button, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import { TbInfoCircle } from "react-icons/tb";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const onButtonClick = () => {
    console.log("onButtonClick");
    setAlertVisible(true);
  };

  const onAlertClose = () => {
    setAlertVisible(false);
  };
  // const infoIcon = <IconInfoCircle></IconInfoCircle>
  const infoIcon = <TbInfoCircle size={20}></TbInfoCircle>

  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        {alertVisible && (
          <Alert
            icon={infoIcon}
            title="Alert Title"
            variant="light"
            withCloseButton
            onClose={onAlertClose}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            deleniti consequuntur ratione quos? Iste quo, hic expedita totam
            voluptatum ex ea perspiciatis? Explicabo expedita iste maiores
            corporis ullam dolore earum!
          </Alert>
        )}

        <Button variant="filled" onClick={onButtonClick}>
          Show Alert
        </Button>
      </div>
    </MantineProvider>
  );
}

export default App;
