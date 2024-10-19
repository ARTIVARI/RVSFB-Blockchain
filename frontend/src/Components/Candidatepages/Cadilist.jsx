import React from 'react'
import { candidate } from '../../cadidatelist'
import Candidateslist from './Candidateslist'

const Cadilist=()=> {
  return (
    <div className='flex flex-col justify-center basis-7/12 bg-zinc-900 rounded-lg p-10  '>
      <div>
        
      </div>
      <div className='flex flex-col gap-2'>
        { candidate.map((card,index)=>(
         <Candidateslist key={index} cdsymb={card.cdsymb} cdparty={card.cdparty} cdname={card.cdname}/>
        ))}

      </div>
    </div>
  )
}

export default Cadilist