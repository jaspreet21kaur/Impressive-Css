import React from 'react'
import Backgroud from './components/Backgroud'
import Foreground from './components/Foreground'


function App() {
  return (
    <div className='background bg-zinc-800 w-full h-screen relative'>
      <Backgroud/>
      <Foreground/>
       </div>
  )
}

export default App






























// import React, { useState } from 'react'
// import Navbar from './Navbar'

// function App() {
//   var [a,b]= useState(68)
//   return (
//     <>
//       <Navbar/>
//       <h1 className='heading text-black'>{a}</h1>
//       <button onClick={()=>b(a+1)} className='btn bg-green-500 rounded-md text-white px-2 py-1'>
//         click me
//       </button>
      
//     </>
//   )
// }

// export default App





