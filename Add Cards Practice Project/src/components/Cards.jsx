import React from 'react'
import Card from './Card'

function Cards({users,removeButton}) {
  return (
    <div className='h-[40vh] max-h-[40vh] w-full flex justify-center items-center mt-36 gap-2 flex-wrap'>
        {users.map((elem,index)=> {
         return <Card id={index} removeButton={removeButton} key={index} user={elem} />
        })}
    </div>
  )
}

export default Cards