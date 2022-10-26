import React from "react";

function Info() {
  return (
    <div className="info">
      <div className="info--portrait-container">
        <img src="portrait.jpg" alt="portrait" className="info--portrait"/>
      </div>
      <div className="info--title-container">
        <h1 className="info--name">Rob Sassack</h1>
        <h2 className="info--title">Web Developer</h2>
        <h3 className="info--website">robsassack.github.io</h3>
      </div>
      <div className="info--buttons">
        <button className="info--email"><i class="fa-solid fa-envelope"></i>Email</button>
        <button className="info--linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
