import React, { useState } from 'react'
import "./cssbin.css"
import { RiDeleteBin2Line } from 'react-icons/ri'
import { BsGrid3X2 } from "react-icons/bs"
const Bin = () => {
    const [Shide,setSHide]=useState(true)
   function OnClick(){
        setSHide(!Shide)
   }
    return (
        <div>
            <div className="">
                <div className="bg-white absolute w-[155vh] mx-[10vh] mr-[4%] ml-[19%]">
                    <div className="flex justify-between items-center px-5 py-3">
                        <p>Bin For My drive</p>
                        <BsGrid3X2 className='cursor-pointer ml-[83%]' size={22} />
                       
                    </div>
                    <p className=' border-b-[2px] border-gray-200'></p>
                    <div className="flex justify-between px-5 mt-3 py-[2.3vh] bg-slate-100">
                        <p>Items in the bin are deleted forever after 30 days</p>
                        <p className='hover:bg-slate-200 cursor-pointer  px-3 flex items-center'>Empty Bin</p>
                    </div>
                    <div className="w-full h-[20rem] pointer-events-none flex-row ">
                        <RiDeleteBin2Line className='flex   justify-center items-center mx-auto mt-[10%]' size={100} />
                        <p  className='ml-[47%] mt-6'>No items</p>
                        <p className='ml-[39%]'>Items moved to bin will appear here</p>
                        <p className='ml-[46.5%] text-blue-400 underline cursor-pointer'onClick={OnClick}>Learn more</p>
                        {/* <p className=' text-blue-400  underline cursor-pointer' >Learn more</p> */}
                    </div>
                </div> 
            </div>
          <div style={{display:Shide?"none":"block"}} className="shadow-xl border-1 border-slate-200 mx-auto w-[20vh] absolute ml-[65%] top-[70%] h-[10vh] items-center justify-center">learn more</div>
        </div>
    )
}

export default Bin
