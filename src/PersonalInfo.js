// Personal Info Section

import React from "react";
import './Styles.css';;

const PersonalInfo = () => {
    const email = "alainam0111@gmail.com";
    const linkedIn = "www.linkedin.com/in/alaina-musselwhite-862644280";

    return (
    <div className="personal-info">
      <h1>Alaina Musselwhite</h1>
      <p>I am a rising senior in college majoring in BAIS. I enjoy going to the gym and hanging out with friends.</p>
      <p>Contact Information:</p>
      <ul>
      <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
      <li>LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
      </ul>
    </div>
  );
}

export default PersonalInfo;