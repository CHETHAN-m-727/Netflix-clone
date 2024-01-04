import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./routes/Router";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#77C155", // your primary color
        light: "#666666",
      },
      secondary: {
        main: "#666666", // your secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
