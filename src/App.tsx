import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Form from "./components/form/Form";

function App() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        <Form></Form>
      </div>
    </MantineProvider>
  );
}

export default App;
