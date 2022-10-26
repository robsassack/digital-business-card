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
        <a href="mailto:rsassack25@gmail.com" className="info--email"><button><i class="fa-solid fa-envelope"></i> Email</button></a>
        <a href="https://linkedin.com/in/robsassack" className="info--linkedin"><button><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a>
      </div>
    </div>
  );
}

export default Info;
