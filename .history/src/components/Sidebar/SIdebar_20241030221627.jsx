import React from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const SIdebar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Hamburger toggled={isOpen} color='#fff' toggle={setOpen} size={20} direction='right' rounded/>

      <div className="upper">
        
      </div>
    </>
  )
}

export default SIdebar
