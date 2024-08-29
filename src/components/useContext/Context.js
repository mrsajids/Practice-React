import React, { createContext } from 'react'
import InnerComponent from './InnerComponent/InnerComponent'
import InnerComponent2 from './InnerComponent/InnerComponent2'
export const data=createContext('hjjh')

const Context = () => {
    let name='name1'
    let name2='name2'
  return (
    <div>
        <h1>Context</h1>
        <data.Provider value={{name,name2}}>
    <InnerComponent/>
    <InnerComponent2/>
    </data.Provider>
    </div>
  )
}

export default Context