import React, { useRef, useState } from 'react'
import Card from './Card';


function Foreground() {
  const ref = useRef(null);

   const [data] = useState([
    {name:"About 10 feet back into the cave water oozed from the wall, slowly dripping into a small rock pool.",
     size:".9mb",download:true, Status:true , tags:{ tag:true , color:"bg-green-500", downloadStatus:true},
    },
    {name:"It was of small dimensions, with a peaked cottage roof, and not much else to be seen, the dirt being raised five feet all around as if it were a compost heap.",
     size:"10mb",download:true, Status:false , tags:{ tag:true , color:"bg-green-500", downloadStatus:false },
    },
    {name:" Wiggling through the small opening, she turned and pulled the sash back down.",
     size:"2.2mb",download:false, Status:true , tags:{ tag:false , color:"bg-green-500" , downloadStatus:false},
    },
   ])
    
  return (
    <div ref={ref}  className='fixed flex gap-8 bg-transparent h-screen w-full z-10 p-4 flex-wrap'>
     {data.map(elem=> <Card reference={ref} data={elem}/>)}
      
    </div>
  )
}

export default Foreground