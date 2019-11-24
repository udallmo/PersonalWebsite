import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import './App.css';
import ParticleComponent from "./ParticleComponent";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoIosPaper } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Pdf from '../src/Resume_2019_L.pdf';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  showSocial () {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const contactClass = this.state.visible ? 'contactIcon' : 'contactIcon hide'

    return (    
    <div className="App">
      <div className="particle"><ParticleComponent /></div>

      <header className="header">
      <h1>
        Udall Mo
      </h1>
      <div className="lineStyle"></div>
      <br/>
      <p>Full-Stack Developer</p>
      <Button variant="outline-light" onClick={this.showSocial.bind(this)} className="btnStyle">Check me out!</Button>
      <br/>
      <div>
        <a className={contactClass} rel="noopener noreferrer" href='https://www.linkedin.com/in/udall-mo-a13b17127/' target='_blank'><FaLinkedinIn /></a>
        <a className={contactClass} rel="noopener noreferrer" href='https://github.com/udallmo' target='_blank'><FaGithub /></a>
        <a className={contactClass} rel="noopener noreferrer" href={Pdf} target="_blank"><IoIosPaper /></a>
        <a className={contactClass} rel="noopener noreferrer" href={"mailto: udall_mo@outlook.com"}><MdEmail /></a>
      </div>
    </header>
  </div>);
  }
}

export default App;
