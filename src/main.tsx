import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToasterContext from "./contexts/ToastContext.tsx";

// const theme = unstable_createMuiStrictModeTheme();
const font = "'Inter', sans-serif;";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: font,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ToasterContext />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
