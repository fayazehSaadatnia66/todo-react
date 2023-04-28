import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Todoes from "./todoes"
import TodoPorivider from "./context/todoProvider"

const App = () => {

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="todos"
          element={
            <TodoPorivider>
              <Todoes />
            </TodoPorivider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
