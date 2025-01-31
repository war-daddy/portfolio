import React from "react";
import "../App.css";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ title, description, icon, onClick }) {
  return (
    <>
    <div className="d-flex flex-row-reverse p-3" style={{fontSize:'26px',cursor:'pointer'}}>
      <Link to="/" style={{color:'#fff'}}><MdLightMode/></Link></div>
    <div className="card-cu">
      {/* <div>
        <div className="profile-desc">Software developer</div>
      </div>
      <div className="profile-box">
        <div className="profile-sub-box">🧑‍💻</div>
      </div>
      <div>
        <div className="profile-desc-down">Hi, I'm Sachin Kumar</div>
      </div> */}
      <h1 className="mob-new-text text-gradient">Hi I'm Sachin Kumar</h1>
    </div>
    </>
  );
}

export default Card;
