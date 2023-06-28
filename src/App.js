import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/theme-context";
import { ThemeTogglerButton } from "./components/theme-toggler-button/theme-toggler-button";
import { Card } from "./components/card/card";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeTogglerButton />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
