import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/SIdebar'

function App() {

  return (
    <>
<div className='h-[100vh] w-[100%] overlay'>
<Sidebar/>
<Main/>
</div>
    </>
  )
}

export default App