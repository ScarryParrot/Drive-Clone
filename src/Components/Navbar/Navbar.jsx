import React, { useState } from 'react'
import { FaGoogleDrive } from "react-icons/fa"
import { MdOutlineContactSupport, MdAccountCircle } from "react-icons/md"
import { FiSettings, FiSearch } from "react-icons/fi"
import { GrApps } from "react-icons/gr"
import { IoMdOptions } from "react-icons/io"
import { AiOutlineUserAdd } from "react-icons/ai"
import LeftMain from './LeftMain'
const Navbar = () => {
    const[hide,setHide]=useState(true)
    const[hideAcc,setAccHide]=useState(true)
    const[Helphide,sethelpHide]=useState(true)
    function AccClick(){
        setAccHide(!hideAcc)
    }
    function settingsClick(e){
        e.stopPropagation()
        setHide(!hide)
    }
    function helpClick(e){
        e.stopPropagation()
        sethelpHide(!Helphide)
    }
    return (
        <div className="top-0  h-20">
            <div className='flex justify-between items-center max-w-[82rem] mx-auto pt-3'>
                <div className="flex items-center text-xl cursor-pointer"><FaGoogleDrive className='mx-2 cursor-pointer' size={30} />Drive</div>

                  <div className="flex items-center w-[50%]">
                    <FiSearch size={20} className='absolute mx-[-5.5rem] cursor-pointer'/>
                    <input type="text" name="" className='border-2 before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 -mx-[6rem] after:border-gray-500 bg-gray-100 w-[90%] px-[7%] rounded-md py-[1%] focus:outline-none ' placeholder='Search in Drive' id="" />
                    <IoMdOptions size={20} className='absolute mx-[34%]'/>
                  </div>
          
                    <div className="flex  items-center absolute left-[85%] ">
                        <MdOutlineContactSupport onClick={helpClick} className=' cursor-pointer mx-3' size={25} />
                        <FiSettings onClick={settingsClick} className='mx-2 cursor-pointer ' size={25} />
                    </div>
                    <div className="flex  items-center ">
                    <GrApps className='mx-2  cursor-pointer' size={25} />
                    <MdAccountCircle onClick={AccClick} className='mx-2 cursor-pointer ' size={28} />
                    </div>
                    
                </div>
                <p className='border-b-[0.5px] border-gray-300 pt-3'></p>
                <LeftMain/>

{/* settings */}

            <div style={{display:hide? "none":"block"}} className="z-20 duration-300 ease-in-out transition-all absolute rounded-lg p-4 bg-white drop-shadow-2xl  w-[20%] top-[10%] right-[9%] ">
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Settings</p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Get drive for Desktop</p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Keyboard Shortcuts</p>
            </div>

  {/* help */}

            <div style={{display:Helphide? "none":"block"}} className="z-20 duration-300 ease-in-out transition-all absolute rounded-lg p-4 border- border-slate-200 bg-white drop-shadow-2xl  w-[20%] top-[10%] right-[13%] ">
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Help</p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Training</p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Updates</p>
                <p className='mt-3 border-b-2 border-gray-300'></p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Terms and Policies</p>
                <p className='mt-1 font-mono cursor-pointer hover:bg-slate-200 hover:rounded-md w-full pl-3'>Send feedback to Google</p>

            </div>

            {/* account*/}
            <div style={{ display: hideAcc?"none":"block" }} className="z-30">
            <div className="z-20 absolute top-[10%]  right-[3%] border-2 rounded-xl border-slate-200">
                <div className="bg-white flex-row w-[400px] h-[50vh] rounded-xl drop-shadow-2xl">
                    <div className="flex-row text-center justify-center items-center">
                        <MdAccountCircle className='mx-auto' size={67}/>
                        <p>Name</p>
                        <p>Email</p>
                            <button className='py-1 border-2 mt-[2%] border-slate-200 rounded-r-full rounded-l-full px-2 cursor-pointer hover:bg-slate-200 '><a rel="noreferrer" target="_blank" href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act"> Manage your google account</a></button>
                    </div>
                        <p className='mt-3 border-b-[1px] border-gray-200'></p>
                        <a rel="noreferrer" target="_blank" href="https://accounts.google.com/v3/signin/identifier?dsh=S1477131237%3A1671867924738151&authuser=0&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1YsWkEI80yj_CDtK7OwD_eEL3uzZFbotB&ec=GAlAMQ&hl=en-GB&service=writely&flowName=GlifWebSignIn&flowEntry=AddSession"><div className="hover:bg-slate-200 py-[0.1rem] pb-4">
                            <p className='flex  items-center px-6 mt-5 cursor-pointer '><AiOutlineUserAdd className='ml-4' />Add another Account</p>
                    </div> </a>
                    
                        <p className=' border-b-[1px] border-gray-200'></p>
                    <div className="flex mx-auto justify-center items-center mt-4   ">
                            <button className='border-2 cursor-pointer  border-slate-200 rounded-md  hover:bg-slate-200 px-2'>Sign Out</button>
                    </div>
                        <p className='mt-3 border-b-[1px] border-gray-200'></p>
                        <div className="flex justify-between px-[17%] text-sm items-center  mt-[4.5%] "><a rel="noreferrer" target="_blank" href="  https://policies.google.com/privacy?hl=en_GB"><p className=' cursor-pointer  hover:bg-slate-200 '>Privacy Policies</p> </a>
                        

                            <a rel="noreferrer" target="_blank" href=" https://policies.google.com/terms?hl=en-GB">  <p className='cursor-pointer hover:bg-slate-200 '>Terms and Services</p> </a>

                        
                      
                    </div>
                    </div>
                </div>
            </div>
          
            </div>
    
    )
}

export default Navbar
