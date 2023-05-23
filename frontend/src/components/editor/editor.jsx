import React, { useCallback, useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './editor.css';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import ContextMenu from '../contextMenu';

const SAVE_INTERVAL_MS = 2000

var toolbarOptions = [
  [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, { 'font': [] }],
  ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }, 'code-block'],
  [ 'link' ,'image'],
  [{ 'align': [] }, { 'direction': 'rtl' }, { 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }, 'clean']
];

var icons = Quill.import("ui/icons");
icons['bold'] = `<svg xmlns="http://www.w3.org/2000/svg" width=24 height=24>
                  <path d="M6 15V4h4.292q1.416 0 2.396.833.979.834.979 2.042 0 .792-.386 1.406-.385.615-1.093.969v.104q.833.271 1.343.979.511.709.511 1.605 0 1.354-1.011 2.208-1.01.854-2.593.854Zm2.062-6.5h2.084q.625 0 1.062-.385.438-.386.438-.948 0-.542-.417-.927-.417-.386-1.021-.386H8.062Zm0 4.604h2.313q.729 0 1.167-.375.437-.375.437-1.021 0-.666-.448-1.052-.448-.385-1.219-.385h-2.25Z" fill="#444746"/>
                </svg>`;
icons['italic'] = `<svg xmlns="http://www.w3.org/2000/svg" width=24 height=24>
                    <path d="M5 16v-2h2.375l3.187-8H8V4h7v2h-2.271l-3.208 8H12v2Z" fill="#444746"/>
                  </svg>`;
icons['underline'] = `<svg xmlns="http://www.w3.org/2000/svg" width=24 height=24>
                        <path d="M4.167 17v-1.5h11.666V17ZM10 14q-1.896 0-3.198-1.302T5.5 9.5V3h2v6.5q0 1.042.729 1.771Q8.958 12 10 12q1.042 0 1.771-.729.729-.729.729-1.771V3h2v6.5q0 1.896-1.302 3.198T10 14Z" fill="#444746"/>
                      </svg>`;
icons['code-block'] = `<svg xmlns="http://www.w3.org/2000/svg" width=24 height=24>
                        <path d="m2 17 2.417-2.417q-.438-.416-.417-1.031.021-.614.479-1.031l9.083-9.083Q14 3 14.625 3t1.063.438l1.874 1.874q.417.459.417 1.063 0 .604-.417 1.063l-9.083 9.083q-.458.417-1.052.448-.594.031-1.01-.386L6 17Zm9.417-5.542L9.542 9.562l-4.021 4.021 1.896 1.896Z" fill="#444746"/>
                      </svg>`;
icons['link'] = `<svg xmlns="http://www.w3.org/2000/svg" style=width:18;height:10>
                  <path fill="#444746" fill-rule="evenodd" d="M1.9,4 C1.9,2.84 2.84,1.9 4,1.9 L8,1.9 L8,0 L4,0 C1.79,0 0,1.79 0,4 C0,6.21 1.79,8 4,8 L8,8 L8,6.1 L4,6.1 C2.84,6.1 1.9,5.16 1.9,4 L1.9,4 Z M14,0 L10,0 L10,1.9 L14,1.9 C15.16,1.9 16.1,2.84 16.1,4 C16.1,5.16 15.16,6.1 14,6.1 L10,6.1 L10,8 L14,8 C16.21,8 18,6.21 18,4 C18,1.79 16.21,0 14,0 L14,0 Z M6,5 L12,5 L12,3 L6,3 L6,5 L6,5 Z"/>
                </svg>`;
icons['clean'] = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M10.479 8.375 8.958 6.854 7.125 5.021H16v2h-4.938ZM16 18.146l-6.792-6.792-1.583 3.667H5.458l2.23-5.188-5.813-5.812 1.063-1.063 14.124 14.125Z" fill="#444746"></path>
                  </svg>`;

export const Editor = () => {
  const {id: docId} = useParams()
  const [socket, setSocket] = useState()
  const [quill, setQuill] = useState()
  console.log(docId)

  useEffect(() => {
    const s = io('http://localhost:3001');
    setSocket(s)
    return () => {
      s.disconnect();
    }
  }, []);

  useEffect(() => {
    if(socket == null || quill == null) return

    const handler = delta => {
      quill.updateContents(delta)
    }
    socket.on("receive-changes", handler)
    
    return () => {
      socket.off("receive-changes", handler)
    }
  }, [socket, quill])

  useEffect(() => {
    if(socket == null || quill == null) return

    const handler = (delta, oldDelt, source) => {
      if(source !== 'user') return
      socket.emit("send-changes", delta)
    }
    quill.on('text-change', handler)
    
    return () => {
      quill.off('text-change', handler)
    }
  }, [socket, quill])

  useEffect(() => {
    if(socket == null || quill == null) return
    socket.once("load-document", document => {
      quill.setContents(document)
      quill.enable()
    })
    socket.emit("get-document", docId)
  }, [socket, quill, docId])

  useEffect(() => {
    if(socket == null || quill == null) return
    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)
    return () => {
      clearInterval(interval)
    }
  }, [socket, quill])

  const wrapperRef = useCallback(wrapper => {
    if(wrapper == null) return
    wrapper.innerHTML = ""
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      placeholder: 'Type @ to insert',
      theme: 'snow',
    });
    q.disable()
    q.setText('Loading...')
    setQuill(q);
  }, []);

  const initialpoint = {
    show: false,
    x:0,
    y:0,
  }
  const[contextMenu, setContextMenu] = useState(initialpoint)
  function openContextMenu(e) {
    e.preventDefault();
    const{pageX, pageY} = e
    setContextMenu({show: true, x: pageX, y: pageY})
  }
  const contextMenuClose = () => setContextMenu(initialpoint)
  return (
    <div className='w-full bg-[#f9fbfd]'>
      <div className=' h-12 w-full px-4 border-b-2'>
        <div className='flex bg-[#edf2fa] h-10 w-auto rounded-full' />
      </div>
      <div className='px-1 pt-0.5'>
        <div className='py-2 px-5 h-[42rem] overflow-x-hidden overflow-y-scroll'>
          <div 
            id='editor' 
            className='min-h-[70rem] border-[#ccc] w-[50rem] bg-white' 
            style={{"border": "0.1rem solid #ccc", "display": "flex","margin": "auto"}} 
            ref={wrapperRef} onContextMenu={openContextMenu}
          />
          {contextMenu.show && <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose}/>}
        </div>
      </div>
    </div>
  )
}