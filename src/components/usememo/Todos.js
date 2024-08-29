import { memo } from "react"

const Todos = ({todo,setTodo}) => {
    console.log('todos calling..')
    const addTodo=()=>{
        setTodo([...todo,"new todo"])
    }
  return (
    <div>
        {todo.map((t,i)=>{
            return <p key={i}>{t}</p>
        })}
        <button onClick={addTodo}>Add todo</button>
    </div>
  )
}
export default memo(Todos)