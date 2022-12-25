import React, { useState } from 'react'
import { TiPlus } from "react-icons/ti"
import { CiHardDrive } from "react-icons/ci"
import { GrPersonalComputer, GrDocumentText } from "react-icons/gr"
import { BsPeopleFill, BsStar, BsFileArrowUp, BsFileEarmarkSpreadsheet } from "react-icons/bs"
import { AiOutlineClockCircle, AiOutlineCloud, AiOutlineFolderAdd } from "react-icons/ai"
import { ImBin } from "react-icons/im"
import { BiRightArrowCircle  } from "react-icons/bi"
import { TfiLayoutSliderAlt } from "react-icons/tfi"
import { FaWpforms } from "react-icons/fa"
import { MdDriveFolderUpload } from "react-icons/md"
// import centerMain from './centerMain'
import RightMain from './RightMain'
import { NavLink } from 'react-router-dom'

const LeftMain = () => {
  const [hide,setHide]=useState()
  function OnclickNew(){
    setHide(!hide)
  }
  return (
    <div className='flex '>
      <div className="max-w-[260px] h-screen ">
        <div className="px-[5%]">
          <div className=" mx-auto pt-4">
            <button onClick={OnclickNew} className=' hover:scale-95 rounded-r-2xl rounded-l-2xl shadow-md shadow-black bg-white px-[16%] flex items-center justify-between py-2 '><TiPlus className='' size={30} /> New</button>

            <NavLink to={"/my_drive"}> <button className='flex w-[35vh] hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><CiHardDrive className='mr-11' size={24} />My Drive</button></NavLink>

            <NavLink to={"/computer"}> <button className='flex  w-[35vh]  hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><GrPersonalComputer className='mr-11' size={24} />Computers</button></NavLink>

            <NavLink to={"/shared_with_me"}><button className='flex  w-[35vh]  hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><BsPeopleFill className='mr-11' size={24} />Shared with me</button></NavLink>


            <NavLink to={"/recent"}><button className='flex  w-[35vh]  hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><AiOutlineClockCircle className='mr-11' size={24} />Recent</button></NavLink>


            <NavLink to={"/starred"}><button className='flex w-[35vh]   hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><BsStar className='mr-11' size={24} />Starred</button></NavLink>


            <NavLink to={"/bin"}><button className='flex  w-[35vh]  hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><ImBin className='mr-11' size={24} />Bin</button></NavLink>
            <p className='border-b-[1px] border-gray-300 pt-3'></p>




            <NavLink to={"/storage"}><button className='flex  w-[35vh] hover:rounded-r-2xl  hover:bg-gray-300 items-center mt-4 py-[0.25rem]'><AiOutlineCloud className='mr-11' size={24} />Storage</button></NavLink>

            <input type="range" name="" id="" className='' />

            <span className='text-xs font-semibold flex ml-1 '>yay! U got yourself a flexible Storage</span>
             <a target={"_blank"} rel="noreferrer" href="https://one.google.com/storage?i=m&utm_source=drive&utm_medium=web&utm_campaign=g1_widget_normal#upgrade"><button className='border-2  border-gray-200 p-2 flex justify-center items-center w-[50%] mx-[10%] text-sm mt-4'> Buy Storage</button></a>
          </div>
        </div>




        <div className="">
          <div style={{display:hide?"none":"block"}} className="mx-auto flex justify-between  w-[19rem] shadow-xl  border-slate-200 rounded-md top-[21%] left-[1%] absolute bg-white border ">

            <p className='hover:bg-slate-200 mt-[3%]   flex items-center justify-start'><AiOutlineFolderAdd className='mr-[12%]' size={26}/> New Folder</p>
            <p className='border-b-[1px] border-gray-300 pt-3'></p>

            <p className='hover:bg-slate-200 mt-[3%]   flex items-center justify-start'><MdDriveFolderUpload className='mr-[12%]' size={26}/>Folder Upload</p>
            <p className='hover:bg-slate-200 mt-[3%]  flex items-center justify-start'><BsFileArrowUp className='mr-[12%]' size={26}/>File Upload</p>
            <p className='border-b-[1px] border-gray-300 pt-3'></p>
            <a href="https://docs.google.com/document/d/1UV5sZ-524FTF7F9ekVoeAPNbp3qeJCpl80xObMW6ciM/edit" target={"_blank"} rel="noreferrer">   <p className='hover:bg-slate-200 mt-[3%]   flex items-center justify-start'><GrDocumentText className='mr-[12%]'  size={26}/>Google Docs<BiRightArrowCircle size={18}  className='ml-[42.5%]'/></p></a>

            <a href="https://docs.google.com/spreadsheets/d/11lDnS9SFvk3NkU3FF2i0pJ2Vbt_0aZTOffHIbL7NMd8/edit#gid=0" target={"_blank"} rel="noreferrer">  <p className='hover:bg-slate-200 mt-[3%]   flex items-center justify-start'><BsFileEarmarkSpreadsheet className='mr-[12%] ' size={26} />Google Sheet<BiRightArrowCircle size={18} className='ml-[42%]' /></p></a>

            <a href="https://docs.google.com/presentation/d/10kPvv9NESGwvHy2c9SQ88R8FBXUQ5-_Kt5HRjDqFeEc/edit#slide=id.p" target={"_blank"} rel="noreferrer">     <p className='hover:bg-slate-200  mt-[3%]   flex items-center justify-start'><TfiLayoutSliderAlt className='mr-[12%]' size={26} />Google Slide<BiRightArrowCircle size={18} className='ml-[42.5%]' /></p></a>
         
            <a href="https://docs.google.com/forms/d/1LInea3-bQwVkLp7KWHile3ql76PUs8dp9zQoBEUY4K8/edit" target={"_blank"} rel="noreferrer">     <p className='hover:bg-slate-200 mt-[2%]  flex items-center justify-start'><FaWpforms className='mr-[12%] ' size={26} />Google Forms<BiRightArrowCircle size={18} className='ml-[40%]' /></p></a>
         

         
        
       
           <p className='mb-3 hover:bg-slate-200 mt-[3%]  flex items-center justify-start pl-[21%]'>More<BiRightArrowCircle size={18}  className='ml-[74.2%]'/></p>
          </div>
        </div>




      </div>
      
      {/* <centerMain/> */}
      <RightMain />
    </div>
  )
}

export default LeftMain
