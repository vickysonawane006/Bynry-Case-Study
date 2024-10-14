/* import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ name, description, imageUrl, profile, onSummaryClick }) {
  const navigate=useNavigate();

  const handleSummaruCLick=()=>{
    navigate('/summary', {state:{profile}});
  };
  
  return (
    <div className="profile-card">
      <img src={imageUrl} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <button className="summary-button" onClick={()=>onSummaryClick(profile)}>Summary</button>
        <h3 className="profile-name">{name}</h3>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
}

export default Profile; */

import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ name, description, imageUrl, profile }) {
  const navigate = useNavigate();

  const handleSummaryClick = () => {
    // Pass the profile data using the state in navigate
    navigate("/summary", { state: { profile } });
  };

  return (
    <div className="profile-card">
      <img src={imageUrl} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <button className="summary-button" onClick={handleSummaryClick}>
          Summary
        </button>
        <h3 className="profile-name">{name}</h3>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
}

export default Profile;

