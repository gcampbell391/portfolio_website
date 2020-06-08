import React from 'react';
import './App.css';
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import MyProfile from './components/MyProfile';
import Interests from './components/Interests';
import MyProjects from "./components/MyProjects"
import ContactMe from "./components/ContactMe"
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="app">
      <Header />
      <MyProfile />
      <div className="infoBody">
        <AboutMe />
        <Interests />
      </div>
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
