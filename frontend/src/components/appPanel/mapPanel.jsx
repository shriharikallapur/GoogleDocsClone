import React from 'react'

export default function MapPanel({visible, onClose}) {
    if(!visible) return null;

    return (
    <div className='absolute  w-[19rem] mt-[-29rem] ms-[-15rem] z-50 h-[99.5vh] bg-white shadow-[1px_1px_1px_1px_rgba(60,64,67,.3)]'>
        <div className='mt-1 mb-3 ps-2 flex justify-between'>
            <div className='block ms-2'>
                <span className='text-[10px] text-[#70757a] font-medium'>MAPS</span>
                <h1 className='text-[#70757a] text-base font-medium'>Explore</h1>
            </div>
            <button onClick={onClose} className='float-right me-4'>
                <img src="/img/sidePanel-icons/sidePanelClose.png" alt="" width={24} height={24}/>
            </button>
        </div>
        <div className='border-2 flex py-1.5 px-3 m-2 rounded-lg'>
            <img src="/img/sidePanel-icons/Gsearch.png" alt="" width={24} height={24}/>
            <input type="text" placeholder='Search Google Maps'  className='ms-2'/>
        </div>
        <div>
            <div>
                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Bangaluru,%India&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            </div>
        </div>
    </div>
  )
}
