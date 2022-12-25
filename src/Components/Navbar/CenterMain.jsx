import React, { useState } from 'react'
import "./css.css"
import { BsGrid3X2 } from "react-icons/bs"
import { AiOutlineArrowUp } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"
const CenterMain = () => {
    const [hideGrid, setHideGrid] = useState(true)
    function gridClick(){
        setHideGrid(!hideGrid)
    }
    return (
        <div>
            <div className="flex ml-[19%]">
                <div className=" max-w-[1050px]  h-screen a-screen mt-4">
                    <div className="flex items-center max-w-[96%] mx-auto">
                        <p className='text-xl'>Starred</p>
                        <BsGrid3X2 onClick={gridClick} className='cursor-pointer ml-[83%]' size={22} />
                        <AiOutlineInfoCircle className=' ml-12 ' size={22} />
                        
                    </div>
                    <p className='mt-3 border-b-2 border-gray-300'></p>
                    <div className="flex  max-w-[96%] mt-4 focus:outline-2 focus:outline-blue-600">
                        <p className='ml-[2%]'>Name</p>
                        <p className='ml-[40%]'>Owner</p>
                        <p className='ml-[10%]'>Last Modified</p>
                        <p className='ml-[6%]'>File size</p>
                        <p className='ml-[8%]'>Location</p>
                    </div>
                    <p className='mt-3 border-b-2 border-gray-300'></p>
                </div>
            </div>
 
            <div style={{display:hideGrid?"none":"block"}} className="ease-in-out duration-[1500ms] h-screen">
                <div className="bg-white h-[90vh] top-[160%] absolute w-[78%] ">
                    <div className="flex justify-between mt-4 px-5">
                        <p>Files</p>
                        <p className='px-10 flex items-center'><AiOutlineArrowUp/>Last Modified</p>
                    </div>
                    <p className=' mt-3 border-b-2 border-gray-300'></p>
                    <div className=""></div>
                </div>
             
              
            </div>
            
        </div>
    )
}

export default CenterMain
