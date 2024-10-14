import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Profile from "./ProfileCard";
import SummaryPage from "./summaryPage";
import Login from "./Login";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm]=useState("");
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      description: "John is a passionate software engineer with over 8 years of experience in full-stack development. He enjoys solving complex problems and is always eager to learn new technologies. When he’s not coding, John loves hiking and exploring the great outdoors.",
      dob: "January 15, 1990",
      age: 34,
      hobbies: "Hiking, Reading, Playing Guitar",
      imageUrl: "profile.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Jane is a graphic designer who specializes in creating stunning visual content for both web and print media. She has a keen eye for detail and a love for color theory. Jane often participates in local art shows to showcase her work and connect with other creatives.",
      dob: "March 22, 1995",
      age: 29,
      hobbies: "Painting, Photography, Yoga",
      imageUrl: "profile.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      description: "Alice is a dedicated teacher who loves inspiring her students to learn and grow. With a focus on STEM education, she incorporates fun and interactive activities into her lessons. Outside of the classroom, Alice enjoys volunteering and mentoring young girls interested in science and technology.",
      dob: "June 30, 1988",
      age: 36,
      hobbies: "Gardening, Volunteering, Traveling",
      imageUrl: "profile.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      description: "Bob is an avid traveler and a food enthusiast. He has visited over 20 countries and enjoys trying new cuisines wherever he goes. Bob documents his culinary adventures on his blog, sharing recipes and travel tips with fellow foodies.",
      dob: "November 10, 1985",
      age: 38,
      hobbies: "Cooking, Traveling, Blogging",
      imageUrl: "profile.jpg",
    },
    {
      id: 5,
      name: "Charlie Green",
      description: "Charlie is a fitness coach who helps clients achieve their health goals through personalized training programs. His approach combines nutrition advice with tailored workout plans. Charlie is also a certified yoga instructor and enjoys practicing mindfulness.",
      dob: "February 5, 1992",
      age: 32,
      hobbies: "Weightlifting, Yoga, Hiking",
      imageUrl: "profile.jpg",
    },
    {
      id: 6,
      name: "Diana White",
      description: "Diana is a marketing strategist with a knack for storytelling. She works with brands to create compelling narratives that resonate with their audience. In her free time, Diana enjoys attending live music events and exploring local art galleries.",
      dob: "August 17, 1993",
      age: 31,
      hobbies: "Concerts, Art Appreciation, Writing",
      imageUrl: "profile.jpg",
    },
    {
      id: 7,
      name: "Eve Adams",
      description: "Eve is a passionate environmentalist dedicated to raising awareness about climate change. She organizes community clean-up events and educational workshops to inspire others to take action. Eve enjoys nature photography and often shares her work to promote conservation efforts.",
      dob: "April 12, 1991",
      age: 33,
      hobbies: "Nature Photography, Hiking, Activism",
      imageUrl: "profile.jpg",
    },
    {
      id: 8,
      name: "Frank Black",
      description: "Frank is a technology enthusiast and an entrepreneur. He founded a startup that focuses on developing innovative apps that enhance productivity. When he’s not working, Frank loves playing video games and participating in hackathons to collaborate with other tech innovators.",
      dob: "September 25, 1987",
      age: 37,
      hobbies: "Gaming, Coding, Attending Tech Meetups",
      imageUrl: "profile.jpg",
    },
  ];

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive matching
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm) // Filter profiles based on the search term
  );

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div className="content" style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CreateArea onAdd={addNote} />
                  <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
          />
                  {notes.map((noteItem, index) => (
                    <Note
                      key={index}
                      id={index}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                    />
                  ))}
                  <div className="profile-container">
                    {filteredProfiles.map((profile) => (
                      <Profile
                        key={profile.id}
                        name={profile.name}
                        description={profile.description}
                        imageUrl={profile.imageUrl}
                        profile={profile}
                      />
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 

