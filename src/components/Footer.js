import React from "react";
import '../App.css';
import { CiMail } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";


const Footer = () =>{
    return(
        <>
       
        <div className="footer">
        <h2 className='mt-5 text-center  text-gradient'  style={{fontSize:"45px"}}>Let's Get In Touch !
        👋</h2>

        <div className="d-flex justify-content-center">
        <div className="d-flex gap-2 bg-dark p-1" style={{fontSize:"30px",borderRadius:"8px"}} >
        <a
        href="mailto:sachinagon@gmail.com"
        style={{ textDecoration: "none", color: "inherit" }}
        title="Send Email"
        >
        <CiMail />
      </a>

      
      <a
        href="tel:+9191351575"
        style={{ textDecoration: "none", color: "inherit" }}
        title="Call Now"
      >
        <IoCallSharp />
      </a>
        </div>
        </div>
        
        <div className='mt-5 text-center  text-gradient'  style={{fontSize:"20px"}}>@2024 Sachin Kumar - All Rights Reserved.</div>
        </div>
        </>
    )
}

export default Footer;