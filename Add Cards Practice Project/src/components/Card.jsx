import React from 'react'

function Card({user,removeButton,id}) {
  return (
    <div className='w-44 h-[90%] max-h-[90%]  p-2 bg-white border-solid border-black border-[2px] flex  items-center flex-col rounded-md'>
        <div className="overflow-hidden flex justify-center items-center image h-16 w-16 rounded-full bg-slate-200 mb-2">
            <img src={user.image} alt="" />
        </div>
        
        <h1 className='font-bold text-black text-lg'>{user.name}</h1>
        <h2 className='opacity-60 font-semibold text-sm'>{user.email}</h2>
        <p className='text-center leading-tight font-normal text-black text-sm mt-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit consectetur.</p>
        <button onClick={()=>removeButton(id)} className='text-center px-5 py-2 bg-red-600 rounded-xl mt-4 text-xs font-bold'>Remove</button>


    </div>
  )
}

export default Card