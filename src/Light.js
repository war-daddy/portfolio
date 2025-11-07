import './light.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { PiFileCppFill } from "react-icons/pi";
// import { FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import { SiCodechef } from "react-icons/si";
// import { IoDocument } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { BsCalendar2EventFill } from "react-icons/bs";
// import { FaUserAlt } from "react-icons/fa";
// import { SiHubspot } from "react-icons/si";
// import { MdAdsClick } from "react-icons/md";
// import { FaGithub } from "react-icons/fa";
// import { SiGeeksforgeeks } from "react-icons/si";
// import { SiCodeforces } from "react-icons/si";
// import Footer from './components/Footer';
import { CiMail } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import NewLight from './newlight';
import ElectricBorder from "./ElectricBorder";


const ProjectCard = (name,year,source,link,tech) =>{
    return (<>
     <ElectricBorder
        color="#ff7d83ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16,paddingBottom:'10px' }}
        width="fit-content"
        height="fit-content"
      >
     <div className='p-card p-3 mt-3'>
        <div style={{color:'black'}}>{year}</div>
        <div className='mt-2 fw-bold'>{name} <span className='ms-2' style={{color:'grey'}}>- {tech}</span></div>
        <div className='mt-3 d-flex gap-3'>
        <a role='button' href={source} target='_blank' className='btn btn-primary' style={{color:'black'}}>Source <FaExternalLinkAlt/></a>
        <a role='button' href={link} target='_blank' className='btn btn-secondary' style={{color:'black'}}>Demo <FaExternalLinkAlt/></a>
        </div>
     </div>
     </ElectricBorder>
    </>);
}
function Light() {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className="light">
      <header className='ml'>
        <div className='mt-5 fw-bold fs-3 nme'>Sachin Kumar <Link to="/light" style={{color:'#000'}} className="ms-2"><MdLightMode/></Link></div>
        {/* <div className='header-style mt-3'>
             <div className='d-flex justify-content-between w-25 mt-3 mob-head'>
                <div className='fw-bold' role='button'>Work</div>
                <div className='fw-bold' role='button'>Projects</div>
                <div className='fw-bold' role='button'> <a href="https://drive.google.com/file/d/159t6hcPNh6F433_CZmRVH_qFNa1lBgQl/view?usp=drive_link" rel="noreferrer" target="_blank">Resume</a></div>
            </div> 
            <div className='d-flex justify-content-between w-50'>
            <div  className='d-flex top-icons fs-2 mob-head'>
            <a href="https://www.linkedin.com/in/sachin-kumar-0804341b7/" rel="noreferrer" target="_blank"> <FaLinkedin/></a>
            <a href="https://leetcode.com/u/sachinagon/" rel="noreferrer" target="_blank"> <SiLeetcode/></a>
            <a href="https://www.codechef.com/users/logan_23" rel="noreferrer" target="_blank"> <SiCodechef/></a>
            <a href="https://www.geeksforgeeks.org/user/attack0titan/" rel="noreferrer" target="_blank"> <SiGeeksforgeeks/></a>
            <a href="https://codeforces.com/profile/Attack_08" rel="noreferrer" target="_blank"> <SiCodeforces/></a>
            <a href="https://drive.google.com/file/d/159t6hcPNh6F433_CZmRVH_qFNa1lBgQl/view?usp=drive_link" rel="noreferrer" target="_blank"> <IoDocument/></a>
            <a href="https://github.com/war-daddy" rel='noreferrer' target='blank'><FaGithub/></a>
            </div>
            </div>
        </div> */}
      </header>

      <section className='ml'>
       <div className='fw-bold fs-1 mt-5 typing'>Hey, I'm Sachin!</div>
       <div className='mt-3 fs-5'>Welcome to my spot 👋</div>
       <div className='mt-3 fs-5'>I'm a Software Developer who loves building things from scratch and optimizing performance. I enjoy turning ideas into reality using JavaScript, React, and PHP. Passionate about frontend and backend development, I’ve worked on impactful projects like a DSA Simulator and a Live Crypto Tracker. Always eager to learn, improve, and collaborate on exciting projects. Let’s build something amazing together!</div>
       <div className='mt-3 fs-5'>Last working at <a href='https://10times.com' target='_blank' className='fw-bold'>10Times</a> as a Software developer for <span className='fw-bold'>1.5</span> Years.</div>
      </section>
       
       <section className='ml mt-5'>
        <div className='fw-bold fs-5 mt-3'>Techstack I know</div>
        <div>
        <div className='d-flex fs-2 gap-5 mt-3'>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />
        <BsFiletypeSql />
        <PiFileCppFill />
        </div>
        </div>
       </section>

       <section className='ml mt-5'>
        <div className='fw-bold fs-5 mt-5'>Projects</div>
        <div className='gap-5 d-flex flex-wrap'>
        {ProjectCard("Crypto Tracker","2022","https://github.com/war-daddy/Reactjs_Crypto","https://aesthetic-sunshine-4ec466.netlify.app/",'Reactjs')}
        {ProjectCard("React Portfolio","2024","https://github.com/war-daddy/portfolio","https://portfolio-git-main-sachin-kumars-projects-504e38e3.vercel.app/",'Reactjs')}
        {ProjectCard("Dsa Simulator","2023","https://github.com/war-daddy/dsasimulator_hub.github.io","https://github.com/war-daddy/dsasimulator_hub.github.io",  'Reactjs')}
        {ProjectCard("React Password Generator","2024","https://github.com/war-daddy/React_Reason","https://github.com/war-daddy/React_Reason",'Reactjs')}
        {ProjectCard("JSONformatter","2024","https://github.com/war-daddy/JSONformatter","https://github.com/war-daddy/JSONformatter", 'Reactjs')}
        {ProjectCard("MemoryGame","2024","https://github.com/war-daddy/memory-game","https://github.com/war-daddy/memory-game", 'ReactNative')}
        </div>
       </section>

       <section className='ml mt-5'>
       <div className='fw-bold fs-5 mt-5'>Education</div>
       <div className='mt-3 d-flex justify-content-between me-5 mob-edu'>
           <div>
            <div className='fw-bold'>Bachelor of Technology</div>
            <div>Truba College of Science and Technology</div>
            <div className='d-flex gap-5 align-items-center'><div>Grade:<span className='fw-bold'>8.95</span></div><div>2019-2023</div></div>
          </div>
          <div>
            <div className='fw-bold'>Intermediate</div>
            <div>A.K. Gopalan College</div>
            <div className='d-flex gap-5 align-items-center'><div>Grade:<span className='fw-bold'>73%</span></div><div>2016-2019</div></div>
          </div>
          <div>
            <div className='fw-bold'>Matriculation</div>
            <div>L/S High School Ramankabad</div>
            <div className='d-flex gap-5 align-items-center'><div>Grade:<span className='fw-bold'>68%</span></div><div>2015-2016</div></div>
          </div>
       </div>
 
       </section>

       <hr className='ml me-5' />
       <footer className='ml mt-5'>
        <div>Made by <span className='fw-bold text-muted'>Sachin Kumar</span></div>
        <div className='d-flex justify-content-start fs-4 gap-3 mt-3 mb-3'>
           <a href="mailto:sachinagon@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
              title="Send Email" className='bg-circle d-flex justify-content-center align-items-center'>
                  <CiMail />
            </a>
        <a href="tel:+9191351575"
           style={{ textDecoration: "none", color: "inherit" }}
           title="Call Now" className='bg-circle d-flex justify-content-center align-items-center'>
                <IoCallSharp />
        </a>
        </div>
       </footer>

    </div>
    </div>
    </>
  );
}

export default Light;