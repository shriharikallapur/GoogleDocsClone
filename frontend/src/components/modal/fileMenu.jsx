import React from 'react'
import { Link } from 'react-router-dom'

export default function FileMenu({visible, onClose}) {
    if(!visible) return null;

    const handleOne = (event) => {
        if(event.target.id === "container") onClose()
    }    
  return (
    <div id='container' onClick={handleOne} className='z-50 h-screen absolute w-full top-0 pt-16 ps-[3.6rem]'>
        <div className='bg-white w-60 h-10 rounded-lg shadow-black p-2'>
            <Link to={"/"} className='flex justify-between w-full' target='_blank'>
                <img src="/img/gdocs.png" alt="" width={24} height={24} />
                <span className='px-2'>New Doc</span>
            </Link>
        </div>
    </div>
  )
}
