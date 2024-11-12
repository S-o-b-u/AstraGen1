import React from 'react'

const Main = () => {
  return (
    <>
    <div className='relative w-[100%] px-5 py-5'>
      <nav className=' flex justify-between '>
        <h1 className='absolute text-white left-[6vw] text-2xl font-semibold'>Astra Gen 1</h1>
      <div className='absolute right-[5vw] top-5 bg-white w-[5vw] h-[6vh] rounded-full '>
      <img className='absolute left-[50%] -translate-x-[50%] p-1 w-10' src=".\icons\icons8-ghost.gif" alt="github" />
      </div>
        <img className=' absolute right-5 w-[40px] h-[40px]' src=".\icons\user.png" alt="user" />
      </nav>
    </div>
    <div className='content'>
<h1>Hello Deviies!</h1>

    </div>
    </>
  )
}

export default Main
