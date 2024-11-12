import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Turn as Hamburger } from 'hamburger-react'
function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setOpen] = useState(false)

  return (
    <>
<Hamburger toggled={isOpen} color='#fff' toggle={setOpen} size={20} direction='right' rounded/>
    </>
  )
}

export default App
