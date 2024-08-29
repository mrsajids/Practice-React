import { useState } from "react"
import Todos from "../usememo/Todos"
import { useCallback } from "react"

const Memo = () => {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])
    // const callExpensiveFunction=ExpensiveFunction1(1)
    const handleCount=()=>{
        setCount((c)=>c+10)
    }

    // this function create again and call many times
    const callExpensiveFunction = useCallback(function ExpensiveFunction(c){
      console.log('expensivefun calling');
      for (let index = 0; index < 100000000; index++) {
        c=c+1
      }
      return c;
    },[])

    // function ExpensiveFunction1(c){
    //   console.log('expensivefun calling');
    //   for (let index = 0; index < 20000000; index++) {
    //     c=c+1
    //   }
    //   return c;
    // }
    
  return (
    <div>
        <h1>Memo</h1>
          {/* causes rerender when no needed */}
          <Todos todo={todo} setTodo={setTodo}/>
        <p>count: {count}</p>
        <button onClick={handleCount}>+</button>
        <br />
        <h2>Expensive calculation</h2>
        {callExpensiveFunction}
    </div>
  )
}
export default Memo