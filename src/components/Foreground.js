import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
  const ref=useRef(null)
  const data=[
    {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true,tagtitle:"Download Now",tagcolor:"green"},
    },
    {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      filesize: ".9mb",
      close: false,
      tag:{isOpen: false,tagtitle:"Download Now",tagcolor:"blue"},
    },
    {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true,tagtitle:".............",tagcolor:"blue"},
    },
    
  ]
  return (
    <div ref={ref} className='w-full h-full flex gap-10 flex-wrap p-5 fixed top-0 left-0 z-[3]'>  
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground