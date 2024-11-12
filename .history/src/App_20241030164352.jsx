import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BurgerMenu from './components/BurgerMenu'
import { Fade as Hamburger } from 'hamburger-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Hamburger/>
const [isOpen, setOpen] = useState(false)

<Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  )
}

export default App
