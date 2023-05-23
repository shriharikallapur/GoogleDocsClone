import React from 'react'

export default function ShareModal({visible, onClose}) {
    if(!visible) return null;

    const handleOnClone = (event) => {
        if(event.target.id === "container") onClose()
    }
  return (
    <div id='container' onClick={handleOnClone} className='bg-[#00000089] z-50 h-screen absolute w-screen top-0 flex justify-center items-center'>
        <div className='bg-white absolute z-60 w-[30rem] h-60 rounded-lg'>
            <div>
                <h1 className='text-black my-2 mx-5 text-2xl'>Share <span> {document.title.replace(' - Google Docs', '')}</span></h1>
            </div>
            <div className='mt-14 flex justify-center items-center'>
                <input type="text" readOnly className='border border-black rounded w-[27rem] px-2' value={window.location.href} />
            </div>
            <div className='flex justify-between items-center px-6 mt-10'>
                <button className='border border-black py-2 px-3 rounded-3xl flex text-blue-700 active:bg-slate-500' onClick={() =>  navigator.clipboard.writeText(window.location.href)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-[0.6rem] me-3 mb-0' width={20} height={15}>
                        <path fill="blue" fill-rule="evenodd" d="M1.9,4 C1.9,2.84 2.84,1.9 4,1.9 L8,1.9 L8,0 L4,0 C1.79,0 0,1.79 0,4 C0,6.21 1.79,8 4,8 L8,8 L8,6.1 L4,6.1 C2.84,6.1 1.9,5.16 1.9,4 L1.9,4 Z M14,0 L10,0 L10,1.9 L14,1.9 C15.16,1.9 16.1,2.84 16.1,4 C16.1,5.16 15.16,6.1 14,6.1 L10,6.1 L10,8 L14,8 C16.21,8 18,6.21 18,4 C18,1.79 16.21,0 14,0 L14,0 Z M6,5 L12,5 L12,3 L6,3 L6,5 L6,5 Z"/>
                    </svg>
                    Copy link
                </button>
                <button onClick={onClose} className='py-2 px-6 rounded-3xl flex bg-[#0B57D0] hover:bg-[#20447c] text-white'>Done</button>
            </div>
        </div>
    </div>
  )
}
