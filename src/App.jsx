import React from 'react'
import Hello from './Hello'
import Add from './Add'
import List from './List'

export default function App() {
  return (<>
    <div>
      <h1 style={
        {
          color : 'red'
        }
      } >Sheikh </h1>
    </div>
    <div>
      <Hello/>
      <Add />
      <List />
    </div>
    </>
  )

}


