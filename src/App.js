import ProductPage from 'page/productPage';
import { ThemeProvider, Box } from '@gedesurya125/surya-ui';
import { theme, themeConfigs } from 'theme';
import { ProductContextProvider } from 'context';

// Data source

function App() {
  return (
    <ProductContextProvider>
      <ThemeProvider theme={theme} config={themeConfigs}>
        <Box className="App">
          <ProductPage />
        </Box>
      </ThemeProvider>
    </ProductContextProvider>
  );
}

export default App;
