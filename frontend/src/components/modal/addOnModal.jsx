import React from 'react'

export default function AddOnModal({visible, onClose}) {
  if(!visible) return null;

  const handleOnClone = (event) => {
      if(event.target.id === "container") onClose()
  }
  return (
    <div id='container' onClick={handleOnClone} className='bg-[#00000089] z-50 h-screen absolute w-screen flex justify-center items-center top-0 right-0'>
      <iframe name="xpcpeer20ME" frameborder="0" title="Google Workspace Marketplace" style={{border: "0px", verticalAlign: "bottom", width: "85%", height: "85%", position: "absolute", top: "3.5rem", right: "7rem"}} src={"https://workspace.google.com"}></iframe>
    </div>
  )
}
