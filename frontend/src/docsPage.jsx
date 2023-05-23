import React from 'react'
import { Toolbar } from "./components/toolbar";
import { Sidebar } from './components/sidebar';
import { Editor } from './components/editor/editor';

export const DocsPage = () => {

  return (
    <div className='w-full h-screen overflow-hidden'>
      <Toolbar />
      <div className='flex'>
        <Editor />
        <Sidebar />
      </div>
    </div>
  )
}
