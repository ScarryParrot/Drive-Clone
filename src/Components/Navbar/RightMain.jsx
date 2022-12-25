import React from 'react'
import "./css.css"
import { SlCalender } from "react-icons/sl"
import { BiNotepad } from "react-icons/bi"
import { MdOutlineTaskAlt } from "react-icons/md"
import { RiContactsFill } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"
const RightMain = () => {
    return (
        <div className="">
            <div className="absolute right-0">
                <div className="ml-2 w-[56px] h-[100vh]  justify-center ">
                    <div className=" flex-row pt-4">
                        <SlCalender className='ml-[40%]  cursor-pointer hover:bg-slate-200  ' size={19} />
                        <BiNotepad className='ml-[40%] mt-[80%] cursor-pointer hover:bg-slate-200  ' size={19} />
                        <MdOutlineTaskAlt className='ml-[40%] mt-[80%] cursor-pointer hover:bg-slate-200  hover:rounded-full' size={19} />
                        <RiContactsFill className='ml-[40%] mt-[80%] cursor-pointer hover:bg-slate-200 hover:rounded-full ' size={19} />
                        <AiOutlinePlus className='ml-[36%] mt-[80%] cursor-pointer  hover:bg-slate-200 hover:rounded-full ' size={22} />
                    </div>   
                     <p className='border-l-2 border-black'></p>
                </div>
            </div>
        
        </div>
    )
}

export default RightMain
