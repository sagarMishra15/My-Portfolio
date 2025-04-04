import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
