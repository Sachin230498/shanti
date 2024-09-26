import React from 'react'
import Child_3 from './Child_3'

const Child_2 = ({a}) => {
  return (
    <div>
       <h1>Hello {a}  </h1>
       <Child_3  name = {a}/>
    </div>
  )
}

export default Child_2
