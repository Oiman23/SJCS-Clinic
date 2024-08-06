import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <div id="gradient">
        <center><h1 className="title">Welcome to SJCS Clinic</h1></center>
        <center><img src="https://media.istockphoto.com/id/1194838627/vector/patient-in-hospital.jpg?s=612x612&w=0&k=20&c=LqhY8qXr1IgGA0PjGLwqEyVJL-MBTFBU5rf3Dcg4DWo=" alt="Patient in hospital" /></center>
        <center><p className="descript">Here at SJCS Clinic, we strive to deliver excellent service and proper treatment to any forms of illness. Our nurses, doctors, and surgeons do their very best to help patients stay at their best.</p></center>
        <center><img src="https://media.istockphoto.com/id/621576732/vector/medical-team-hospital-staff-vector-illustration.jpg?s=612x612&w=0&k=20&c=-ouwunIZSePve5XumMkGTB1zBRX34byPskCd-T2hQWM=" alt="Medical team" /></center>
        <center><p className="descript">You are currently on our Homepage. Select Login if you have an account or Signup if you'd like to register.</p></center>
        <br />
      </div>
      {isVisible && (<button onClick={scrollToTop} className="back-to-top">↑</button>)}
    </div>
  );
}

export default App;