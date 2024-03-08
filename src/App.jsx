import style from "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./routes/Router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <HomePage />
      {/* <Router /> */}
    </div>
  );
}

export default App;
