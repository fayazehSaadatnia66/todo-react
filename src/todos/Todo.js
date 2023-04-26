import { useContext, useEffect } from "react"
import ContextTodo from "./context/contextTodo"

const Todo = () => {
  const todoContext = useContext(ContextTodo)
  console.log(todoContext)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  //   return ()
}

export default Todo
