import { Box } from "src/components";
import { ProducPage } from "./page/ProducPage";

// Data source
import { productData } from "src/data";

function App() {
  return (
    <Box className="App">
      <ProducPage data={productData} />
    </Box>
  );
}

export default App;
