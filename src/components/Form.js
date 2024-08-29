import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState('')
  return (
    <div>
        <h1>Form - Controlled event(useState)</h1>
        <form>
            <input  type='text' value={name} onChange={(event)=>setName(event.target.value)} maxLength={10}/>
            <p>{name.toUpperCase()}</p>
        </form>
    </div>
  )
}

export default Form