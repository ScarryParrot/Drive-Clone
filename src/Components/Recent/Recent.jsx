import React from 'react'
import { BsGrid3X2 } from"react-icons/bs"
import { AiOutlineInfoCircle } from"react-icons/ai"

const Recent = () => {
  return (
    <div>
        <div className="">
              <div className=" overflow-y-auto bg-blue-20 ml-[19%] mx-auto  h-[100vh]  w-[75%]">
             <div className="flex items-center max-w-[96%] mx-auto ">
                      <p className='text-xl '>Recent</p>
                      <BsGrid3X2  className='cursor-pointer absolute ml-[65%]' size={22} />
                      <AiOutlineInfoCircle className='ml-[92%]' size={22} />
            </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
                  <div className="flex  mt-4 focus:outline-2 focus:outline-blue-600">
                      <p className='ml-[2%]'>Name</p>
                      <p className='ml-[53%]'>Owner</p>
                      <p className='ml-[6%]'>File size</p>
                      <p className='ml-[8%]'>Location</p>
                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
                  <div className="">
                    <p className='ml-[1.8%] mt-[2%]'>Today</p>
                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
          </div>
    </div>
    </div>
  )
}

export default Recent
