import React, { useState } from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import { MdStopScreenShare } from "react-icons/md"


const Computer = () => {
    const [cut,setCut]=useState(false)
    const [hide,setHide]=useState(true)

    function crossClick(){
        setCut(true)
    }
    function OnClick() {
        setHide(!hide)
    }
  return (
    <div>
          <div className="">
              <div className=" overflow-y-auto  ml-[19%] mx-auto  h-[100vh]  w-[75%]">
                  <div className="flex items-center max-w-[96%] mx-auto ">
                      <p className='text-xl '>Computers</p>
                      <AiOutlineInfoCircle className='ml-[88%]' size={22} />
                  </div>
                  <p className='mt-3 border-b-2 border-gray-300'></p>
                  <div style={{display:cut?"none":"block"}}  className="duration-700 ease-in-out flex bg-slate-200  py-3">
                      <AiOutlineInfoCircle className='absolute first-letter ml-2 mt-7' size={22} />
                      <div className="flex-row max-w-6xl bg-blue-20 mx-auto py-3 px-3 ml-[6%]" >
                      <p className='mb-3 '>Changes will sync automatically.</p>
                      <p>If you add, edit, move or delete files in folders currently syncing with Google Drive, those changes will also happen on your computer. <p className='text-blue-400 underline cursor-pointer'>Learn more</p> </p>
                    </div>
                      <RxCross1 className='top-[21%] left-[91.5%] absolute' size={20} onClick={crossClick}/>
                    </div>
                    <div className="">
                  <div className="text-center flex-row justify-center items-center w-full h-[50vh] ">
                      <MdStopScreenShare className='ml-[46%] mt-[5%]  ' size={80}/>
                      <p className='mt-[2vh]'>No Computer syncing</p>
                      <p className=''>To sync folders with google Drive , install Backup & Sync on your computer</p>
                          <p className='underline text-mono text-blue-400 cursor-pointer' onClick={OnClick}>Learn more</p>
                    </div>
                    </div>
              </div>
              <div style={{ display: hide ? "none" : "block" }} className="z-20 duration-300 ease-in-out transition-all absolute rounded-lg p-4 border- border-slate-200 bg-white drop-shadow-2xl  w-[20%] top-[70%] right-[27%] ">
                  <p className='mt-1 font-mono cursor-pointer  hover:rounded-md w-full pl-3'>I mean it. Learn more.</p>
              

              </div>
          </div>
          

    </div>
  )
}

export default Computer
