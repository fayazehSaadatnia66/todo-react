import { useReducer } from "react";
import ContextTodo from "../context/contextTodo"
import TodoReducer from "../reducer/todoReducer";

const ProviderTodo = ({children}) => {
    console.log(children);
    const intialState = {
        todoes:[]
    }
    const [state, dispatch] = useReducer(todoReducer, intialState)
  return (
    <ContextTodo.Provider value={{state, dispatch}}>
        {children}
    </ContextTodo.Provider>
  )
}

export default ProviderTodo
