import React from 'react'
import { BsGrid3X2 } from "react-icons/bs"
import { AiOutlineArrowUp } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Mydrive = () => {
  return (
    <div>
          <div className="flex ml-[19%]">
              <div className=" max-w-[1050px]  h-screen a-screen mt-4">
                  <div className="flex items-center max-w-[96%] mx-auto">
                      <p className='text-xl'>Starred</p>
                      <BsGrid3X2  className='cursor-pointer ml-[83%]' size={22} />
                      <AiOutlineInfoCircle className=' ml-12 ' size={22} />
                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
                  <p className='ml-[2%] mt-[2%] text-lg'>Suggested</p>
                  </div>
                  
                  </div>
    </div>
  )
}

export default Mydrive
