import { useReducer } from "react"
let initialState = 0
const reducer = (state, action) => {
    // console.log(state, action);
    if (action.type === "increament")
        return state + 1;

    if (action.type === "decreament")
        return state - 1;

    return state
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>UseReducer</h1>
            <button onClick={() => dispatch({ type: "increament" })}>+</button>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "decreament" })}>-</button>
        </>
    )
}
export default UseReducer