import React from 'react'
import { Link } from 'react-router-dom';

export default function UserModal({visible, onClose}) {
    if(!visible) return null;

    const handleOnClone = (event) => {
        if(event.target.id === "container") onClose()
    }
  return (
    <div id='container' onClick={handleOnClone} className='z-50 h-screen absolute w-screen top-0 flex justify-end items-start pt-16 px-4 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.9)]'>
        <div className='bg-[#e6eef9] shadow-sm absolute z-60 w-[25rem] rounded-3xl p-3'>
            <div className='bg-white rounded-3xl'>
                <div className='flex p-3'>
                    <img className='rounded-full' width={50} height={50} src="/img/user-icon.png" alt="" />
                    <div className='ms-3'>
                        <strong>Shrihari Kallapur</strong>
                        <p>shriharikallapur369@gmail.com</p>
                    </div>
                </div>
                <Link className='ms-16' to={"https://myaccount.google.com/?hl=en_GB"} target='_black'>
                    <button className='border rounded-lg border-black px-5 py-1 bg-white active:bg-slate-400'>Manage your Google Account</button>
                </Link>
                <div className='mt-5 border-t'>
                    <Link className='' to={"https://accounts.google.com/v3/signin/identifier?dsh=S973176816%3A1684839396301547&authuser=0&continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fu%2F0%2Fd%2F1rrfP49tLDb15gO_C2-j6Ua1vu51wSqJBxR0_EDhZsWA%2Fedit&ec=GAlAGQ&hl=en_GB&service=wise&flowName=GlifWebSignIn&flowEntry=AddSession"} target='_blank'>
                        <button className='p-3 w-full mx-auto flex justify-center items-center active:bg-slate-400 active:rounded-b-3xl active:text-white'> 
                            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M hhikbc"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                            <span className='ms-5'>Add another acount</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
