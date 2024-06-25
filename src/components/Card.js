import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1}} className='relative  w-60 h-72 bg-zinc-900/90 rounded-[45px] overflow-hidden text-white px-8 py-10'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0  w-full '>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 rounded-full bg-zinc-600 cursor-pointer justify-center items-center flex'>
            {data.close ? <IoClose/> : <LuDownload size=".7rem" color='#fff'/>}
            
            </span>
            </div>
            {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagcolor==='blue' ? "bg-blue-600" : "bg-green-600"} flex justify-center`}>
                        <h3 className='text-sm font-semibold '>{data.tag.tagtitle}</h3>
                    </div>
            )}
            
        </div>
      </motion.div>
  )
}

export default Card

