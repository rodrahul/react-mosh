import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ExpenseTrackerApp from "./expense-tracker/ExpenseTrackerApp";

function App() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        <ExpenseTrackerApp></ExpenseTrackerApp>
      </div>
    </MantineProvider>
  );
}

export default App;
