import { useCallback, useState } from "react"
import Todos from "./Todos"

const Callback = () => {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])
    const handleButon=()=>{
        setCount(count+1)
    }
    
    const addTodo=useCallback(()=>{
        setTodo([...todo,"new todo"])
    },[todo])
  return (
    <div>
    <h1>Callback</h1>
    {/* DONT FORGET TO ADD MEMO IN NESTED COMPONENT(TODOS) */}
    <Todos todo={todo} addTodo={addTodo}/>
        <h3>Count:{count}</h3>
        <button onClick={handleButon}>+</button>
    </div>
  )
}
export default Callback