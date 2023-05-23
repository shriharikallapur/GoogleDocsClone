import React from 'react'

export default function ContactPanel({visible, onClose}) {
    if(!visible) return null;

    return (
    <div className='absolute  w-[19rem] mt-[-29rem] ms-[-15rem] z-50 h-[99.5vh] bg-white shadow-[1px_1px_1px_1px_rgba(60,64,67,.3)]'>
        <div className='mt-1 mb-3 ps-2 flex justify-between'>
            <div className='block ms-2'>
                <span className='text-[10px] text-[#70757a] font-medium'>CONTACTS</span>
                <h1 className='text-[#70757a] text-base font-medium'>Contacts</h1>
            </div>
            <button onClick={onClose} className='float-right me-4'>
                <img src="/img/sidePanel-icons/sidePanelClose.png" alt="" width={24} height={24}/>
            </button>
        </div>
        <div>
            <div className='h-[40rem] pt-28'>
                <img src="/img/sidePanel-icons/Gemptycontacts.png" alt="" width={200} height={200} className='m-auto' />
                <h1 className='text-center my-5'>No contacts yet</h1>
                <p className='text-center my-5'>Google Contacts makes your contacts organised and clutter-free so that you never lose touch</p>
                <button className='bg-[rgb(26,115,232)] rounded-md text-white py-1.5 px-3 mx-20 my-5'>+ <span>Create contact</span></button>
            </div>
        </div>
    </div>
  )
}