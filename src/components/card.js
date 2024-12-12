import React from "react";
import "../App.css";

function Card({ title, description, icon, onClick }) {
  return (
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
      <h1 className="text-gradient">Hi I'm Sachin Kumar</h1>
    </div>
  );
}

export default Card;
