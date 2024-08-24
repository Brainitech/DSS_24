import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Landing from "./components/Landing Page/Landing"
import Events from "./components/Events/Events"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
