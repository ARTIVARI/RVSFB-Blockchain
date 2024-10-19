import React from 'react'
import Voterhome from './Voterhome'
import { Outlet } from 'react-router-dom'

const Dashboard=()=> {
  return (
    <div className='flex sm:flex-row flex-col gap-5'>
        <div className='basis-1/4'>
           <Voterhome/>
        </div>

        <div className='flex flex-col m-2 basis-3/4 gap-4'>
            <div className='pt-2 h-14 flex flex-row items-center gap-5'>
            <img className='bg-white w-16 rounded-full' src='/logo.png'></img>
            <h1 className='font-mono text-2xl font-bold'>Remote Voting System</h1>
            </div>

            <div>
            <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard