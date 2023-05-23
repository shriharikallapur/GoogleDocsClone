import React, { useEffect, useState } from 'react';
import FileMenu from './modal/fileMenu';
import ShareModal from './modal/shareModal';
import UserModal from './modal/userModal';
import { Link } from 'react-router-dom';

export const Toolbar = () => {
  const [title, setTitle] = useState("Untitled document");
  useEffect(() => {
    document.title = title + ' - Google Docs';
  }, [title]);
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const [shareModal, setShowModal] = useState(false)
  const handleOnClone = () => setShowModal(false)

  const [isOpen, setIsOpen] = useState(false)
  const handleOne = () => setIsOpen(false)

  const [isUserModal, setIsUserModal] = useState(false)
  const userModal = () => setIsUserModal(false)

  return (
    <div className='bg-[#f9fbfd] h-[4rem]'>
      <div className='flex'>
        <div className='pt-3.5 ps-3'>
          <img src="/img/gdocs_logo.png" width={40} height={35} alt=''/>
        </div>
        <div>
          <div className='pt-2'>
            <input id='docName' type="text" onChange={changeTitle} value={title} className='w-[170px] h-5 border-[1px] bg-transparent border-transparent px-2 py-3 text-lg hover:border-[1px] hover:rounded hover:border-black' />
          </div>
          <div className='h-6'>
          <div className='flex mt-0.5'>
            <button onClick={() => setIsOpen(true)} className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>
              File
            </button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Edit</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>View</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Insert</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Format</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Tools</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Extensions</button>
            <button className='text-sm py-0.5 px-[7px] hover:bg-[#dadce0] rounded cursor-pointer'>Help</button>
          </div>
        </div>
        </div>
        <div className='flex right-56 mt-5 absolute'>
          <Link to={"https://meet.google.com/?hs=197&authuser=0"} target='_blank'>
            <img src="/img/Gmeet.svg" alt="" width={24} height={24} />
          </Link>
        </div>
        <div className='p-3'>
          <button onClick={() => setShowModal(true)} className='rounded-full bg-[#c2e7ff] py-[9px] flex right-20 absolute px-6 shadow-none hover:shadow-[0_1px_0_0_rgba(0,0,0,0.6)]'>
            <img src="/img/lock-icon.svg" className='mt-0.5 me-3 w-5' alt='' />
            Share
          </button>
        </div>
        <div className='absolute right-5 py-3'>
          <button onClick={() => setIsUserModal(true)}>
            <img src="/img/user-icon.png" className='rounded-full' width={40} height={40} alt='' />
          </button>
        </div>
      </div>
      <ShareModal visible={shareModal} onClose={handleOnClone}/>
      <FileMenu visible={isOpen} onClose={handleOne}/>
      <UserModal visible={isUserModal} onClose={userModal}/>
    </div>
  )
}