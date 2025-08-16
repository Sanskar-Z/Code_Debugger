import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { modeContext } from "./context/context.js";

function Root() {
  const [mode, setMode] = useState(false); // <-- define here

  return (
    <StrictMode>
      <modeContext.Provider value={[ mode, setMode ]}>
        <App />
      </modeContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
