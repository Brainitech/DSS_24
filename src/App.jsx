import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Landing from "./components/Landing Page/Landing"
import StaticEvents from "./components/Events/StaticEvents"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/events" element={<StaticEvents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
