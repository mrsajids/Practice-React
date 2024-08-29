import React from "react";
import { useRef } from "react";

const UseRef=()=>{
    const circleStyle={
    "height": "9rem",
    "background-color": "white",
    "margin": "3rem 24rem",
    "text-align": "center",
    "border": "2px solid",
    "border-radius": "5rem",
    }
    const ref=useRef()
    const handleRed=()=>{
        ref.current.style.backgroundColor='red'
    }
    const handleGreen=()=>{
        ref.current.style.backgroundColor='green'
    }
    return(
        <>
        <h1>useRef</h1>
        <div className="container" >
            <div className="circle" ref={ref} style={circleStyle}>circle</div>
            <button onClick={handleRed}>Red</button><br />
            <button onClick={handleGreen}>Green</button>
        </div>
        </>
    );
}
export default UseRef