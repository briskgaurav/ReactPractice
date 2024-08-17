import React, { useState } from "react";


function Card() {

  const [color,setcolor] = useState("bg-yellow-100")

  return (
    <div className={`w-full h-screen ${color} flex pb-8 items-end justify-center`}>
      <h1 className=" absolute left-50 top-[40%] text-white uppercase z-10 text-5xl font-sans font-bold">Color Changer Project</h1>
      <div className=" px-4 py-2 colorbar w-[60%] bg-white bg-opacity-40 shadow-xl rounded-xl h-13 flex items-center justify-center gap-10 ">
     <button onClick={()=>setcolor("bg-red-500")} className="px-6 rounded-full py-2 text-black bg-red-500 text-sm font-bold">Red</button> 
     <button onClick={()=>setcolor("bg-green-500")} className="px-6 rounded-full py-2 text-black bg-green-500 text-sm font-bold">Green</button> 
     <button onClick={()=>setcolor("bg-blue-500")}  className="px-6 rounded-full py-2 text-black bg-blue-500 text-sm font-bold">Blue</button> 
     <button onClick={()=>setcolor("bg-purple-500")}  className="px-6 rounded-full py-2 text-black bg-purple-500 text-sm font-bold">Purple</button> 
     <button onClick={()=>setcolor("bg-orange-500")}  className="px-6 rounded-full py-2 text-black bg-orange-500 text-sm font-bold">Black</button> 
     <button onClick={()=>setcolor("bg-pink-500")}  className="px-6 rounded-full py-2 text-black bg-pink-500 text-sm font-bold">Pink</button> 
     <button onClick={()=>setcolor("bg-sky-500")}  className="px-6 rounded-full py-2 text-black bg-sky-500 text-sm font-bold">Skyblue</button> 
      </div>

    </div>
    
  );
}

export default Card;
