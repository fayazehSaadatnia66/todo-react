import TodoContext from "./context/todoContext"
import { useContext, useEffect, useState } from "react"

const Todoes = () => {
  const { todoes, getData, error } = useContext(TodoContext)
  const [loading, setLoading] = useState(true)
  console.log(todoes)
  useEffect(() => {
    ;(async () => {
      await getData()
      setLoading(false)
    })()
  }, [getData])
  return (
    <div className="container">
      <div className="row">
        {error && <div>{error}</div>}
        {loading && (
          <div className="col-md-12 text-center">
            <div className="spinner-border mt-5"></div>
          </div>
        )}
        {todoes.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)}
      </div>
    </div>
  )
}

export default Todoes
