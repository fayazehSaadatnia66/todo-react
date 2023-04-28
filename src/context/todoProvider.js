import axios from "axios"
import TodoContext from "./todoContext"
import TodoReducer from "./todoReducer"
import { useCallback, useReducer } from "react"

const TodoPorivider = ({ children }) => {
  const initialState = {
    todoes: [],
    error: null
  }
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log(res)
      dispatch({ type: "SET_TODOES", payload: res.data })
      dispatch({ type: "SET_ERROR", payload: null })
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message })
      dispatch({ type: "SET_TODOES", payload: null })
    }
  }, [])

  return (
    <TodoContext.Provider value={{ ...state, getData }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoPorivider
