import React from 'react'

const Main = () => {
  return (
    <div className='relative w-[100%] px-3 py-2'>
      <nav className='bg-red-300 flex justify-between '>
        <h1 className='absolute text-white left-0'>Astra Gen 1</h1>
        <img src=".\icons\icons8-ghost.gif" alt="github" />
        <img className='w-[40px] h-[40px]' src=".\icons\user.png" alt="user" />
      </nav>
    </div>
  )
}

export default Main
