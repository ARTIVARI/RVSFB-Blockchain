import React from 'react'
import { Link } from 'react-router-dom'

const Home=()=> {
  return (


     <div className='basis-7/12 bg-zinc-900 rounded-lg  p-5' >
     <h1 className='font-mono text-2xl font-bold '>Welcome to Home Page</h1>
           <div className='flex flex-col justify-center items-center'>
              <img className='mx-auto w-96' src="p5.png" alt="" />
              <Link to='/dashboard/candilistss'>
                <button className='mx-20 mt-4 bg-orange-400 hover:bg-orange-500 px-6 py-4 rounded-full '>Ballet Box</button>
              </Link>
           </div>
        </div>
    
  )
}

export default Home