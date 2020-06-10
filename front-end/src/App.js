import React from 'react';
import './App.css';
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import MyProfile from './components/MyProfile';
import Interests from './components/Interests';
import MyProjects from "./components/MyProjects"
import ContactMe from "./components/ContactMe"
import Footer from './components/Footer';


class App extends React.Component {

  handleSendClick = (event) => {
    event.preventDefault()
    // const userName = event.target.querySelector("#inputName").value
    // const userEmail = event.target.querySelector("#inputEmail").value
    // const userMessage = event.target.querySelector("#inputMessage").value
    // debugger

  }

  render() {
    return (
      <div className="app">
        <Header />
        <MyProfile />
        <div className="infoBody">
          <AboutMe />
          <Interests />
        </div>
        <MyProjects />
        <ContactMe handleSendClick={this.handleSendClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
