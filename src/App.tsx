import { MantineProvider } from "@mantine/core";
// import "@mantine/core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchData from "./components/use-effect/FetchData";
import GameHubApp from "./game-hub/GameHubApp";

function App() {
  return (
    // <MantineProvider>
    // <div className="mx-auto max-w-md p-4">
    // </div>
    // </MantineProvider>

    <GameHubApp></GameHubApp>
  );
}

export default App;
