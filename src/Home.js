import React, { useState } from "react";
import "./Home.css";
import profileImg from "./sk_avatar.png";
import ResumeModal from "./ResumeModal";
import GlitchText from "./GlitchText";
import LightRays from "./LightRays";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
// import { IoDocument } from "react-icons/io5"PiFileCppFill;
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { PiFileCppFill } from "react-icons/pi";


function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-hero">
      <div className="home-left">
        {/* LightRays fills the entire left column via CSS (.home-rays) */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="home-rays"
        />

        <div className="home-image-wrap">
          <img src={profileImg} alt="Sachin Kumar" className="home-image" />
        </div>
      </div>

      <div className="home-right">
        <div className="home-right-inner">
          <h2 className="home-name">
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className="custom-class"
            >
              Sachin Kumar
            </GlitchText>
          </h2>
          <p className="home-sub">Software Developer at <a href="https://www.eloop.dev/" style={{ color: "aqua" }} target="_blank" rel="noreferrer">
                eLoop Dev Solutions LLP
              </a></p>
          <div className="home-sub" style={{ marginTop: "-18px" }}>
            <p>
              Ex : Software Developer at{" "}
              <a href="https://www.10times.com" style={{ color: "orange" }} target="_blank" rel="noreferrer">
                10Times
              </a>
            </p>
          </div>
        </div>
        <div>
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => setOpen(true)}
          >
            Resume
          </button>
          <ResumeModal
            open={open}
            onClose={() => setOpen(false)}
            // replace fileId with your actual Drive file id if different
            fileId="1FQFXq8AjkjOihlU0kZVI-kERnG5wh2J7"
          />
        </div>

        {/* social */}
        <div>
          <div className="header-style mt-3">
            <div className="d-flex justify-content-between w-50">
              <div className="d-flex top-icons fs-2 mob-head gap-5">
                <a
                  href="https://www.linkedin.com/in/sachinkdev"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  href="https://leetcode.com/u/sachinagon/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.codechef.com/users/logan_23"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <SiCodechef />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/attack0titan/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <SiGeeksforgeeks />
                </a>
                <a
                  href="https://codeforces.com/profile/Attack_08"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <SiCodeforces />
                </a>
                {/* <a href="https://drive.google.com/file/d/159t6hcPNh6F433_CZmRVH_qFNa1lBgQl/view?usp=drive_link" rel="noreferrer" target="_blank"> <IoDocument/></a> */}
                <a
                  href="https://github.com/war-daddy"
                  rel="noreferrer"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {/* social */}

          {/* tech */}

          <section className="mt-2">
            <div className="fw-bold fs-5 mt-3">Techstack I know</div>
            <div>
              <div className="d-flex fs-2 gap-5 mt-3">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJsSquare />
                <FaReact />
                <BsFiletypeSql />
                <PiFileCppFill />
              </div>
            </div>
          </section>

          {/* tech end */}
        </div>
      </div>
    </div>
  );
}

export default Home;
