import React, { useContext } from 'react'
import {data} from '../Context'
const InnerComponent2 = () => {
    const obj=useContext(data)
  return (
    <div>InnerComponent2
   <h3> {obj.name}</h3>    
    </div>
  )
}

export default InnerComponent2