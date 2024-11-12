import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/SIdebar'
import { ContextProvider } from './context/Context';

function App() {

  return (
    <ContextProvider>
      <div className=''>
        <Sidebar/>
        <Main/>
      </div>
    </ContextProvider>
  )
}

export default App
