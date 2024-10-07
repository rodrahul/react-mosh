import { MantineProvider } from "@mantine/core";
// import "@mantine/core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchData from "./components/use-effect/FetchData";
import Alert from "./components/Alert";

function App() {
  return (
    // <MantineProvider>
      <div className="mx-auto max-w-md p-4">
      <FetchData></FetchData>
      </div>
    // </MantineProvider>
  );
}

export default App;
