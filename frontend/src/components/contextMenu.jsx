import React from 'react'

export default function ContextMenu({x, y, closeContextMenu}) {
  return (
    <div onClick={() => closeContextMenu()} className='absolute bg-white shadow-slate-800 w-20 h-8 rounded-md border' style={{top: `${y}px`, left: `${x}px`}}>
        <button
          onClick={() =>  navigator.clipboard.writeText(document.querySelector(".ql-editor").children[0].innerHTML)}
          className='p-1 hover:bg-[#e2e0e0] rounded-md active:bg-[#d1cfcf] flex justify-center items-center w-full'
        >
            Copy
        </button>
    </div>
  )
}
