import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ExpandableTextApp from "./components/exercise/expandable-text/ExpandableTextApp";

function App() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        <ExpandableTextApp></ExpandableTextApp>
      </div>
    </MantineProvider>
  );
}

export default App;
