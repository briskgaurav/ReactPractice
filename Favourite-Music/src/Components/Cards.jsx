import React from 'react'

function Cards({data,button,index})
 {

    const {link,name,song,status} = data;

  return (
    <div className=' w-64 bg-orange-200 p-4 rounded-md flex relative gap-4 pb-10'>
        <div className="img w-20 h-20 flex bg-orange-500 rounded-md overflow-hidden ">
            <img className='h-full w-full object-cover' src={link} alt="" />
        </div>
        <div className="content">
            <h3 className='font-bold text-xl'>{song}</h3>
            <h3 className='font-semibold text-lg'>{name}</h3>
        </div>
        <button onClick={()=>button(index)} className={`font-bold text-sm text-white ${status===false? "bg-orange-500" : "bg-teal-500"} px-4 py-2 rounded-md absolute bottom-0 right-0`}>{ status === false? "Add to favourite" : "Added"}</button>
    </div>
    
  )
}

export default Cards