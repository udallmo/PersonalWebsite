import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.css';

const strapi = new Strapi('http://localhost:1337');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [],
      content: [],
      tags: [],
      groups: [],
      experience: [],
   }
 }

 async componentDidMount() {
  try {
    const posts = await strapi.getEntries('contents')
    this.setState({ content: posts });
    console.log(this.state.content);
  } 
  catch(err) {
   alert(err);
  }
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Udall Mo</h1>
          <div className="links">
            <span> GitHub | Linkedin | Resume</span>
          </div>
        </header>

          <div className="container">
            <h2 className="heading">Skills</h2>

            <div className="content">
              <h3 className="title">Langauges:</h3>
              <ul>
                <li>C++</li>
                <li>javascript</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>C#</li>
                <li>C</li>
              </ul>
            </div>
            
            <div className="content">
              <h3 className="title">Framworks/Libraries:</h3>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>NodeJS</li>
                <li>Unity</li>
                <li>Git/Bitbucket</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <h2 className="heading">Projects</h2>
            <ul>
                <li>
                  <h4 className="name">PersonalWebsite</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">UnityTraining</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">IonicMovieApp</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">AdBlockerM</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">MolarMassApp</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">TheLauncher</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">2048 Project</h4>
                  <img />
                  <p>Description</p>
                </li>
                <li>
                  <h4 className="name">WavPlayer</h4>
                  <img />
                  <p>Description</p>
                </li>
              </ul>
          </div>
          <div className="container">
            <h2 className="heading">Work Experience</h2>
            <div className="content">
              <img />
              <h4 className="name">The Co-operators Insurance Group</h4>
              <p>Description</p>
            </div>

            <div className="content">
              <img />
              <h4 className="name">Hubdoc</h4>
              <p>Description</p>
            </div>

            <div className="content">
              <img />
              <h4 className="name">University of Waterloo: MUR</h4>
              <p>Description</p>
            </div>

            <div className="content">
              <img />
              <h4 className="name">Coulters Software</h4>
              <p>Description</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
