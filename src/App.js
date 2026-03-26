import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  return console.log("hello");
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
