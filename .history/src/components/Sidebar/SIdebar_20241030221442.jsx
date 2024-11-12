import React from 'react'

const SIdebar = () => {
  return (
    <div>
      <Hamburger toggled={isOpen} color='#fff' toggle={setOpen} size={20} direction='right' rounded/>
    </div>
  )
}

export default SIdebar
