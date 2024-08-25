import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { UseDoorProvider } from "./components/Events/sevents"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseDoorProvider>
      <App />
    </UseDoorProvider>
  </React.StrictMode>
)
