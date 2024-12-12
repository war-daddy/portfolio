import React from 'react'
import "../App.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { PiFileCppFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { IoDocument } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { SiHubspot } from "react-icons/si";
import { MdAdsClick } from "react-icons/md";


const jobsection = () =>{
    return (
        <>
        <div className='d-flex justify-content-center'>
        <div className='d-flex mt-5 text-gradient' style={{fontSize:"25px"}}>
            <div >
              <img className='job-card-one' src="https://img.10times.com/img/sharelogo.jpg" alt="logo" />
            </div>
            <div  className='job-card-two ms-2'>
              <div>10times <a href="https://10times.com" rel="noreferrer" className='ms-2' target='_blank'><FaExternalLinkAlt/></a> </div>
              <div>May 2023 - Nov 2024</div>
               <div>Software developer - Remote</div>
               {/* <div>Remote</div> */}
               <div>Tech : Html Twig , Css, Bootstrap 5 , jQuery  , Javascript, php</div>
               <div>My Works : <a href="https://10times.com/hub"  rel="noreferrer" className='ms-2'   target='_blank'><SiHubspot/></a> <a href="https://10times.com/experts" className='ms-2' rel="noreferrer" target='_blank'><FaUserAlt/></a> <a href="https://10times.com/experts" className='ms-2' rel="noreferrer" target='_blank'><BsCalendar2EventFill/></a> </div>
            </div>
        </div>
        </div>
        </>
    )
}

const projects = () =>{
  return (<>
  <h2 className='mt-5 text-center  text-gradient'  style={{fontSize:"45px"}}>Projects</h2>
  <div className='d-flex mt-2 justify-content-center gap-4 text-gradient' style={{fontSize:"35px"}}>
   <a className='project-1' rel="noreferrer" href='https://aesthetic-sunshine-4ec466.netlify.app/' target='_blank'>
    <MdAdsClick/> Live Crypto Tracker
   </a>
   <a className='project-2' rel="noreferrer" href='https://github.com/war-daddy/dsasimulator_hub.github.io' target='_blank'>
    <MdAdsClick/> Dsa Simulator
   </a>
  </div>
  </>);
}

const main = () => {
  return (
    <div>
    <div className='d-flex justify-content-center'>
    <div  className='icons d-flex justify-content-evenly align-items-center gap-5'>
    <a href="https://www.linkedin.com/in/sachin-kumar-0804341b7/" rel="noreferrer" target="_blank"> <FaLinkedin/></a>
    <a href="https://leetcode.com/u/sachinagon/" rel="noreferrer" target="_blank"> <SiLeetcode/></a>
    <a href="https://www.codechef.com/users/logan_23" rel="noreferrer" target="_blank"> <SiCodechef/></a>
    <a href="https://drive.google.com/file/d/159t6hcPNh6F433_CZmRVH_qFNa1lBgQl/view?usp=drive_link" rel="noreferrer" target="_blank"> <IoDocument/></a>
    </div>
    </div>
     <div className='text-design text-center text-gradient'>
      Software developer
     </div>
     <div className='d-flex justify-content-center align-items-center gap-5 text-gradient' style={{fontSize:'25px'}}>
        <div> <div className='text-center'>Contact</div> <div>sachinagon@gmail.com</div> </div>
        <div> <div className='text-center'>Location</div> <div>New Delhi, India</div></div>
     </div>
     <div style={{overflow:"hidden"}}>
     <div className='icons d-flex justify-content-evenly skill-icon w-100'>
     <FaHtml5 />
     <FaCss3Alt />
     <FaJsSquare />
     <FaReact />
     <BsFiletypeSql />
     <PiFileCppFill />
     </div>
     </div>
     {jobsection()}
     {projects()}
    </div>
  )
}

export default main