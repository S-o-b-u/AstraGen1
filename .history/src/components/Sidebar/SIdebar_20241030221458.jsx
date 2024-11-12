import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const SIdebar = () => {
  return (
    <>
      <Hamburger toggled={isOpen} color='#fff' toggle={setOpen} size={20} direction='right' rounded/>
    </>
  )
}

export default SIdebar
