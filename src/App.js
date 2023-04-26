import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Todo from "./todos/Todo"
import ProviderTodo from "./todos/provider/ProviderTodo"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="todos" element= {
        <ProviderTodo value={"todo"}><Todo /></ProviderTodo> } />
        {/* <Route path="*" element={<p>There's nothing here: 404!</p>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
