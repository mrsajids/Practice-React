import { memo } from "react";
const Todos = ({todo,addTodo}) => {
    console.log('component render');
  return (
    <div>Todos
        {
            todo.map((todo,i)=>{
                return <p key={i}>{todo}</p>
            })
        }
    <button onClick={addTodo}>add todo</button>
    </div>
  )
}
//*** DONT FORGET TO ADD MEMO IN NESTED COMPONENT(TODOS)
export default memo(Todos)