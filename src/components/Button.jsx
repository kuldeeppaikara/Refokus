import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

function Button({text}) {
  return (
    <div className='bg-zinc-100 max-w-50 px-4 py-2 cursor-pointer rounded-full flex items-center justify-between gap-10 text-black'>
        <span className='text-sm font-medium'>{text}</span>
        <FaLocationArrow className='ml-2 text-sm' />
    </div>
  )
}

export default Button