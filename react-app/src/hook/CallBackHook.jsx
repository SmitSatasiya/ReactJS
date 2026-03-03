import React from 'react'
import {memo} from 'react'

const CallBackHook = ({adjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
        I am a {adjective} Navbar
        <button onClick={()=> get}></button>
    </div>
  )
}

export default CallBackHook