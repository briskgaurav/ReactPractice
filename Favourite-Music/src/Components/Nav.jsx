import React from 'react'

function Nav({data}) {
  return (
    <div className='px-20 py-5 h-[10%] w-full '>
      <div className="icons flex items-center justify-between ">
        <h1 className='text-orange-500 font-bold text-2xl'>Orange</h1>
        <h1 className='px-4 py-2 rounded-md bg-orange-500 font-medium text-sm text-white'>Favourites {data.filter((item)=>item.status).length}</h1>
      </div>
    </div>
  )
}

export default Nav
