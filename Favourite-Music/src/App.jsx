import React, { useState } from 'react'
import Nav from './Components/Nav'
import Cards from './Components/Cards'
function App() {
  const data = [
    {link:"https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"One Direction", song:"Changes" , status: false},

    {link:"https://images.unsplash.com/photo-1482328329694-e5ae819dfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2VyfGVufDB8fDB8fHww", name:"Ed Sheeran", song:"Perfect" , status: false},

    {link:"https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Powfu,Sadboy", song:"dead bed" , status: false},

    {link:"https://media.istockphoto.com/id/1198217800/photo/caucasian-female-singer-portrait-isolated-on-blue-studio-background-in-neon-light.webp?s=612x612&w=0&k=20&c=GFMzs9-haY6lesj6e-ThzSyzOXHr2Czoqmp90jvMq68=", name:"Passenger", song:"Let Her Go" , status: true},
  ]

  const [song,setSong] = useState(data);
  const buttonHandle = (index) =>{
    // alert(index);
    setSong((old)=>old.map((item,itemindex)=>{
      if(itemindex===index) {
        return {...item, status: !item.status}
      }
      return item;
    }))
  }

  return (
   <div className="main w-full h-screen bg-orange-50">
    <Nav data={song}/>
    <div  className="card px-20 mt-10 flex flex-wrap gap-16">
    {song.map((elem,index)=>
    <Cards button={buttonHandle} data={elem} index={index}/>)} 
    </div>
   </div>
  )
}

export default App
