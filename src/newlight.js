// import React, { useEffect, useState } from "react";

import Home from "./Home";
// import main from "./components/main";
import ChromaGrid from "./ChromaGrid";

// import SpotlightCard from "./SpotlightCard";
import EducationSection from "./Educatinbox";
import Expbox from "./Expbox";
import Work from "./Work";
import Footer from "./Footer";

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
          background: "#0a0a0a",
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#fff",
          // marginTop: "50px",
        }}
      >
        Projects
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          // height: "100vh",
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
      <div></div>
      <div
        style={{
          background: "",
          display: "flex",
          justifyContent: "center",
          padding: "0px 0",
        }}
      ></div>
      <Expbox />
      <EducationSection />
      <Work />
      <Footer />
    </>
  );
}
export default NewLight;
