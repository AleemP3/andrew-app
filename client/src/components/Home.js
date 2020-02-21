import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"; 
import "../css/home.css"; 
import andrew from "../images/andrew.jpg"; 

const Home = () => {

  return(
    <div className="main-home-container">
      <div className="home-pic-bio-div">
        <div className="pic">
          <img src={andrew} className="andrew-pic"/>
          <h2>Joseph A. Moss</h2>
        </div>
        <div className="bio">
          <p>Hello, my name is Joseph A. Moss. <br /> I'm a mixed race writer, (African American, Hispanic, White) based out of Salt Lake City. <br />
            I enjoy any genre of fiction when I can make the time to read for myself. <br />
            I am currently a student pursuing a double major in Writing and Rhetoric Studies and Journalism with a minor in creative writing. <br />
            Ultimately, my goal is get my work out for the world to see and to possibly inspire other creatives of color to do the same. <br />
            Thank you for taking your time to visit this site, I hope you enjoyed something!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home