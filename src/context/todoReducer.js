const TodoReducer = (state, action) => {
    switch (action.type) {
      case "SET_TODOES":
        return {
          ...state,
          todoes: action.payload
        }
      case "SET-ERROR":
        return {
          ...state,
          error: action.payload
            }
        default:
            return state
    }


}

export default TodoReducer