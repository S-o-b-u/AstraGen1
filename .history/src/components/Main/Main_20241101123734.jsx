import React from 'react'

const Main = () => {
  return (
    <div className='relative w-[100%] px-5 py-5'>
      <nav className=' flex justify-between '>
        <h1 className='absolute text-white left-[5vw] text-2xl font-semibold'>Astra Gen 1</h1>
      <div className='absolute right-[7vw] bg-white w-[5vw] h-[5vh]'>
      <img src=".\icons\icons8-ghost.gif" alt="github" />
      </div>
        <img className=' absolute right-5 w-[40px] h-[40px]' src=".\icons\user.png" alt="user" />
      </nav>
    </div>
  )
}

export default Main
