import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleForm}) {
   const {register, handleSubmit,reset} = useForm()
   const formsubmit =(data)=>{
    handleForm(data);
    reset();
   }
  
  return (
    <>
    <form  onSubmit={handleSubmit(formsubmit)} className=' px-6 flex-wrap flex justify-center mt-6 gap-4'>
        <input {...register('name')} className='p-2 text-xs border-black border-[2px] border-solid  outline-none font-bold rounded-md' type="text"  placeholder='name'  />
        <input {...register('email')} className='p-2 text-xs border-black border-[2px] border-solid  outline-none font-bold rounded-md' type="email" placeholder='email' />
        <input  {...register('image')} className='p-2 text-xs border-black border-[2px] border-solid  outline-none font-bold rounded-md' type="text" placeholder='image url' />

        <input className='px-5 py-2  bg-blue-500 font-sm font-bold rounded-md' type="submit" />
    </form>
    </>
  )
}

export default Form