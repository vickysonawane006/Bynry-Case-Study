import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './SummaryPage.css'; 

function SummaryPage() {
  const location = useLocation();
  const navigate=useNavigate();
  const { profile } = location.state || {}; // Get the profile data from the location state

  // Optional: Add a fallback in case no profile is passed
  if (!profile) {
    return <div>No profile available</div>;
  }

  const handleBackClick=()=>{
    navigate(-1);
  };

  return (
    <div className="summary-container">
      <div className="back-button" onClick={handleBackClick} style={{cursor: 'pointer'}}>←</div>
      <h1 className="name">{profile.name}</h1> {/* Use profile.name */}
      <div className="description"><b>Description:</b> {profile.description}</div> {/* Use profile.description */}
      <div className="additional-info">
      <p><b>DOB:</b> {profile.dob}</p>
        <p><b>Age:</b> {profile.age}</p>
        <p><b>Hobbies:</b> {profile.hobbies}</p>
      </div>
      <div className="map-icon">
        <img src="map.jpeg" alt="Map Icon" />
      </div>
    </div>
  );
}

export default SummaryPage; 


/* import React from "react";
import { useLocation } from "react-router-dom";
import './SummaryPage.css'; 

function SummaryPage() {
  const location = useLocation();
  const { profile } = location.state || {};

  if (!profile) {
    return <div>No profile data available.</div>;
  }

  return (
    <div className="summary-container">
      <h1 className="name">{profile.name}</h1>
      <p className="description">{profile.description}</p>
      <div className="map-icon">
        <img src="path/to/map-icon.png" alt="Map Icon" />
      </div>
    </div>
  );
}

export default SummaryPage; */






