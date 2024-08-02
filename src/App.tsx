import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Like from "./components/Like";

function App() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        <Like
          initialStatus={true}
          onClick={() => console.log("heart clicked")}
        ></Like>
      </div>
    </MantineProvider>
  );
}

export default App;
