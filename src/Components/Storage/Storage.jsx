import React from 'react'

import { AiOutlineInfoCircle } from "react-icons/ai"
const Storage = () => {
  return (
    <div>
          <div className="flex ml-[19%]">
              <div className=" max-w-[1050px]  h-screen a-screen mt-4">
                  <div className="flex items-center max-w-[96%] mx-auto">
                      <p className='text-xl'>Starred</p>
                      <p className=' ml-[80%] '>Backups</p>
                      <AiOutlineInfoCircle className=' ml-[4%] ' size={22} />
                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
                  <div className="flex justify-between px-5 mt-6">
                      <p className=''>Files While using Drive</p>
                      <p className=' mr-[10%] '>Storage Used</p>

                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
              </div>

          </div>
    </div>
  )
}

export default Storage
