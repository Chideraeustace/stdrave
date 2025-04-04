import React from "react";
import './homepage.css'

const HomePage = () => {
  return (
    <div className="homepage-container">
        <nav>
            <div className="navbar-container">
                 <p className="nav_paragraph"><span className="logo">Student Rave</span>.</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">About</a></li>
                
            </ul>
            </div>
           
        </nav>
        <div className="message">
            <h1 className="homepage-title">🔥 Student Rave Events 🔥</h1>
            <div>
                <p className="welcom_message"><span>You're </span>in! Get set for something special. We're counting down the <span>moments</span> until we connect you to the most <span>exciting</span> events on campus!</p>
                <button class="button-signup-modern-red">Explore!</button> 
            </div> 
        </div>
        
        
      
    </div>
  );
};
//className="homepage-container"
export default HomePage;
