import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="upper">
      <Hamburger toggled={isOpen} color='#fff' toggle={setOpen} size={20} direction='right' rounded/>
<img src=".\icons\add.svg" alt="" />
      </div>
    </>
  )
}

export default Sidebar
