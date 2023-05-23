import React, { useState } from 'react'
import AddOnModal from './modal/addOnModal';
import MapPanel from './appPanel/mapPanel';
import ContactPanel from './appPanel/contactPanel';
import TaskPanel from './appPanel/taskPanel';
import KeepPanel from './appPanel/keepPanel';
import CalendarPanel from './appPanel/calendarPanel';

export const Sidebar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggleSidePanel = () => setIsOpen(!isOpen);

    const[isMapOpen, setIsMapOpen] = useState(false)
    const mapBar = () => setIsMapOpen(false);

    const[isContactOpen, setIsContactOpen] = useState(false)
    const contactBar= () => setIsContactOpen(false)

    const[isTaskOpen, setIsTaskOpen] = useState(false)
    const taskBar= () => setIsTaskOpen(false)

    const[isKeepOpen, setIsKeepOpen] = useState(false)
    const keepBar= () => setIsKeepOpen(false)

    const[isCalendarOpen, setIsCalendarOpen] = useState(false)
    const calendarBar= () => setIsCalendarOpen(false)

    const [addOnModal, setAddOnModal] = useState(false)
    const handleOnClone = () => setAddOnModal(false)

  return (
    <div id='sidebarContainer' className='top-[4.2rem] float-right right-0 h-[92vh] bg-[#f9fbfd]' style={{width: isOpen ? "4rem": "0"}}>
        <ul className='mx-3 h-72' style={{borderBottom: "1px solid #dadce0"}}>
            <li className='w-10 h-10 mt-2 rounded-full hover:bg-[#dadce0] p-[0.6rem]'>
                <button onClick={() => setIsCalendarOpen(true)}>
                    <img src="/img/sidePanel-icons/Gcalendar.png" alt="" width={20} height={20} />
                </button>
            </li>
            <li className='w-10 h-10 mt-4 rounded-full hover:bg-[#dadce0] p-[0.6rem]'>
                <button onClick={() => setIsKeepOpen(true)}>
                    <img src="/img/sidePanel-icons/Gkeep.png" alt="" width={20} height={20} />
                </button>
            </li>
            <li className='w-10 h-10 mt-4 rounded-full hover:bg-[#dadce0] p-[0.6rem]'>
                <button onClick={() => setIsTaskOpen(true)}>
                    <img src="/img/sidePanel-icons/Gtasks.png" alt="" width={20} height={20} />
                </button>
            </li>
            <li className='w-10 h-10 mt-4 rounded-full hover:bg-[#dadce0] p-[0.6rem]'>
                <button onClick={() => setIsContactOpen(true)}>
                    <img src="/img/sidePanel-icons/Gcontacts.png" alt="" width={20} height={20} />
                </button>
            </li>
            <li className='w-10 h-10 mt-4 rounded-full hover:bg-[#dadce0] p-[0.6rem]'>
                <button onClick={() => setIsMapOpen(true)}>
                    <img src="/img/sidePanel-icons/Gmaps.png" alt="" width={20} height={20} />
                </button>
            </li>
        </ul>
        <div className='mx-auto my-10 w-5'>
            <button onClick={() => setAddOnModal(true)}>
                <img src="/img/sidePanel-icons/Ggm_add.png" alt="" width={20} height={20} />
            </button>
        </div>

        <MapPanel visible={isMapOpen} onClose={mapBar}/>
        <ContactPanel visible={isContactOpen} onClose={contactBar}/>
        <TaskPanel visible={isTaskOpen} onClose={taskBar}/>
        <KeepPanel visible={isKeepOpen} onClose={keepBar}/>
        <CalendarPanel visible={isCalendarOpen} onClose={calendarBar}/>

        <AddOnModal visible={addOnModal} onClose={handleOnClone}/>
        <button id='sideBtn' onClick={toggleSidePanel} style={{width: isOpen ? "3.1rem": "2.5rem", borderRadius: isOpen ? "50%": "", right: isOpen ? "1rem": "0", backgroundColor: isOpen ? "#c2c5c6":"#eaeced"}} className='absolute bottom-5 right-0 hover:w-14 w-10 shadow-[0_1px_1px_1px_rgba(60,64,67,.3)] bg-white hover:bg-[#eaeced] rounded-s-full px-2 py-3'>
            <svg className='mt-2 ms-3 rotate-180 active:rotate-0' width={15} height={18} fill="#5F6368">
                <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
                <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
        </button>
    </div>
  )
}