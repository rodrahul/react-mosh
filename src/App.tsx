import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListApp from "./components/product-list/ProductListApp";

function App() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-md p-4">
        <ProductListApp></ProductListApp>
      </div>
    </MantineProvider>
  );
}

export default App;
