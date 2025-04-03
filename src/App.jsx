import { Box, ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import theme from "./Theme"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
    </ThemeProvider>
  );
}

export default App;
