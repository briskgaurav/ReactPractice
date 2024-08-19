import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {

  const [users,setUsers] = useState([])

  const handleForm = (data) =>{
    setUsers([...users,data])
  }
  const removeButton =(id) =>{
    setUsers(()=>users.filter((item,index)=>index!==id))
  }
  

  return (
    <>
    <div className='bg-teal-100 h-screen'>
      <h1 className='font-bold text-4xl text-center pt-4 '>Add Your Favourite Profile!</h1>
     <Cards removeButton={removeButton} users={users} />
     <Form handleForm={handleForm} />
     </div>
    </>
  )
}

export default App
