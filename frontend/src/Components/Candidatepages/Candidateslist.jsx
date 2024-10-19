import React from 'react'

const Candidateslist=({cdsymb,cdparty,cdname})=> {
  return (
    <div className='text-black font-mono flex sm:flex-row flex-col items-center bg-orange-200 rounded-lg p-3 w-full justify-between sm:gap-0 gap-3'>
       <img className='rounded-full w-10 h-10' src={cdsymb}></img>
       <h1 className='sm:text-xl text-sm'>{cdparty}</h1>
       <h1 className='sm:text-xl text-sm'>{cdname}</h1>
       <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Vote</button>
    </div>
  )
}

export default Candidateslist