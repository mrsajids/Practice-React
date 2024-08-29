import React, { useContext } from 'react'
import {data} from '../Context'

const InnerComponent = () => {
    let obj=useContext(data)
    // console.log(name)
  return (
    <div>InnerComponent
<h4>{obj.name}</h4>
<h4>{obj.name2}</h4>

    </div>
  )
}

export default InnerComponent