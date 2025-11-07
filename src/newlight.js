import React, { useEffect, useState } from "react";

import Home from "./Home";
// import main from "./components/main";
import ChromaGrid from "./ChromaGrid";

import SpotlightCard from "./SpotlightCard";

const items = [
  {
    image:
      "https://media.istockphoto.com/id/1426789485/vector/people-talk-diversity-family-together-human-unity-chat-bubble-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=Xv3Fs_CIjw2iKyUfKqft4B4zOygc4u9WzwsW0I6ok2M=",
    title: "Chat Room",
    subtitle: "Reactjs Node Express Socket.io MongoDB",
    handle: "@war-daddy",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/war-daddy/chat-room",
  },
  {
    image: "https://cdn-icons-png.freepik.com/512/9156/9156722.png",
    title: "Live Crypto Tracker",
    subtitle: "Reactjs",
    handle: "@war-daddy",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://aesthetic-sunshine-4ec466.netlify.app/",
  },
  {
    image:
      "https://png.pngtree.com/png-clipart/20230920/original/pngtree-concept-icon-with-blue-gradient-for-data-structures-and-algorithms-vector-png-image_12700673.png",
    title: "Dsa Simulator",
    subtitle: "Reactjs",
    handle: "@war-daddy",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/war-daddy/dsasimulator_hub.github.io",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    title: "Password Generator",
    subtitle: "Reactjs",
    handle: "@war-daddy",
    borderColor: "#F59E42",
    gradient: "linear-gradient(145deg, #F59E42, #000)",
    url: "https://github.com/war-daddy/React_Reason",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/136/136522.png",
    title: "JSONformatter",
    subtitle: "Reactjs",
    handle: "@war-daddy",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "https://github.com/war-daddy/JSONformatter",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "MemoryGame",
    subtitle: "ReactNative",
    handle: "@war-daddy",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/war-daddy/memory-game",
  },
];

function NewLight() {
  return (
    <>
      <Home />
      {/* {main()} */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      {/* edu */}
      <div>
        
      </div>
      <div
        style={{
          background: "",
          display: "flex",
          justifyContent: "center",
          padding: "0px 0",
        }}
      >
        
               {/* edu right */}
        <div style={{ background: "#0a0a0a", width: "100%" }}>
           <div style={{fontSize:"45px",marginTop:"",textAlign:"center"}}>Education</div>
           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <SpotlightCard
            style={{ width: "400px", margin: "20px auto" }}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(0, 170, 255, 0.08)",
                backdropFilter: "blur(4px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    letterSpacing: "0.3px",
                  }}
                >
                  Bachelor of Technology
                </div>
                 
              </div>

              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                2019 – 2023
              </div>

              <div
                style={{
                  fontSize: "18px",
                  color: "#e2e8f0",
                  marginBottom: "14px",
                  fontWeight: "500",
                }}
              >
                Truba College of Science and Technology

              </div>

              <div style={{ fontSize: "16px", color: "#94a3b8" }}>
                Grade: {" "}
                <span style={{ fontWeight: "600", color: "#fff" }}>8.95</span>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            style={{ width: "400px", margin: "20px auto" }}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(0, 170, 255, 0.08)",
                backdropFilter: "blur(4px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    letterSpacing: "0.3px",
                  }}
                >
                  Intermediate
                </div>
              </div>

              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                2016-2019
              </div>

              <div
                style={{
                  fontSize: "18px",
                  color: "#e2e8f0",
                  marginBottom: "14px",
                  fontWeight: "500",
                }}
              >
                A.K. Gopalan College
              </div>

              <div style={{ fontSize: "16px", color: "#94a3b8" }}>
                Grade: {" "}
                <span style={{ fontWeight: "600", color: "#fff" }}>73%</span>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            style={{ width: "400px", margin: "20px auto" }}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(0, 170, 255, 0.08)",
                backdropFilter: "blur(4px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    letterSpacing: "0.3px",
                  }}
                >
                  Matriculation
                </div>
              </div>

              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                2015-2016
              </div>

              <div
                style={{
                  fontSize: "18px",
                  color: "#e2e8f0",
                  marginBottom: "14px",
                  fontWeight: "500",
                }}
              >
                L/S High School Ramankabad
              </div>

              <div style={{ fontSize: "16px", color: "#94a3b8" }}>
                Grade: {" "}
                <span style={{ fontWeight: "600", color: "#fff" }}>68%</span>
              </div>
            </div>
          </SpotlightCard>
          </div>
        
        {/* edu right end */}

        <div style={{ background: "#0a0a0a", width: "100%"}}>
          <div style={{fontSize:"45px",marginTop:"15px",textAlign:"center"}}>Certifications</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <SpotlightCard
            style={{ width: "400px", margin: "20px auto" }}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(0, 170, 255, 0.08)",
                backdropFilter: "blur(4px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#fff",
                  letterSpacing: "0.3px",
                  marginBottom: "6px",
                }}
              >
                Design and Analysis of Algorithms
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                2022 – Present
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#e2e8f0",
                  marginBottom: "14px",
                  fontWeight: "500",
                }}
              >
                NPTEL : IIT Madras
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            style={{ width: "400px", margin: "20px auto" }}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(0, 170, 255, 0.08)",
                backdropFilter: "blur(4px)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#fff",
                  letterSpacing: "0.3px",
                  marginBottom: "6px",
                }}
              >
                Mastering Data Structures & Algorithms using C and C++
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                2021-Present
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#e2e8f0",
                  marginBottom: "14px",
                  fontWeight: "500",
                }}
              >
                Udemy
              </div>
            </div>
          </SpotlightCard>
          </div>
        </div>

      </div>
      {/* edu end */}
      </div>
    </>
  );
}
export default NewLight;
