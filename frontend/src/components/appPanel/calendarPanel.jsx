import React from 'react'

export default function CalendarPanel({visible, onClose}) {
    if(!visible) return null;

    return (
    <div className='absolute  w-[19rem] mt-[-29rem] ms-[-15rem] z-50 h-[99.5vh] bg-white shadow-[1px_1px_1px_1px_rgba(60,64,67,.3)]'>
        <div className='mt-1 mb-3 ps-2 flex justify-between'>
            <div className='block ms-2'>
                <span className='text-[10px] text-[#70757a] font-medium'>CALENDAR</span>
            </div>
            <button onClick={onClose} className='float-right me-4'>
                <img src="/img/sidePanel-icons/sidePanelClose.png" alt="" width={24} height={24}/>
            </button>
        </div>
        <div className='h-[47rem]'>
            <iframe src="https://calendar.google.com/calendar/embed?title=Your%20Google%20Calendar&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=India%2FBangaluru" 
                    className='h-full' frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
  )
}