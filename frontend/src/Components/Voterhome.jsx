import React from 'react'
import { validUser } from '../auth'

const Voterhome=()=>{
   
  return (
    <div className='font-mono flex flex-col bg-orange-500 h-screen rounded-r-2xl gap-4'>
         <div className='p-3'>
            <div className='pt-2 h-14 flex flex-row items-center gap-5'>
              <img className='bg-white w-12 rounded-full' src='/logo.png'></img>
              <h1 className=' text-xl font-bold'>Remote Voting System</h1>
            </div>
         </div>

         <div className='flex flex-col justify-center items-center gap-2'>
              <img className='rounded-full w-44' src={validUser.prourl}></img>
              <h1 className='text-xl font-bold'>{validUser.voterID}</h1>
         </div>

         <div className='text-xl font-bold mx-4 flex flex-col justify-start items-start'>
              <h1>Name : {validUser.name} {validUser.surname}</h1>
              <h1>Gender : {validUser.gender}</h1>
              <h1>DoB : {validUser.dob}</h1>
              <h1>Phone No. : {validUser.phone}</h1>
              <h1>Address : {validUser.address}</h1>
         </div>
    </div>
  )
}

export default Voterhome