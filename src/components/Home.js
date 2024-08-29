import React from 'react'
const Home = ({getname}) => {
    let name='sdk'
    return (
        <>
        <h1>Home </h1>
        <button onClick={()=>getname(name)}>click me</button>
        </>
    )
}
export default Home