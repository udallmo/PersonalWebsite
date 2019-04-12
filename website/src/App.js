import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import './App.css';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

const host = 'https://vast-peak-80907.herokuapp.com'

const strapi = new Strapi(host);

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
    const content = await strapi.getEntries('contents');
    const links = await strapi.getEntries('links');
    const tags = await strapi.getEntries('tags');
    const groups = await strapi.getEntries('groups');
    const experience = await strapi.getEntries('workexperiences');
    console.log(content);

    this.setState({ content, links, tags, groups, experience });
  } 
  catch(err) {
   alert(err);
  }
 }

 tags(group) {
  const tagsList = group.tags.map((tag) =>
    <Col key={tag.id}>{tag.name}</Col>
  );  

  return tagsList;
 }

 createCard(project) {
   const card = <Card>
     <Card.Img className="card-img" variant="top" src={host + project.images.url} />
       <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <Card.Text>
      {project.content}
    </Card.Text>
    <Button variant="dark">Check it out!</Button>
  </Card.Body>
   </Card>;

   return card;
 }

loadProjects() {
  const projects = this.state.content;
  let rows = [];
  let cards = [];

  for (let i = 0; i < projects.length; i ++){
    const card = <Col>{this.createCard(projects[i])}</Col>
    cards.push(card);

    if (cards.length % 4 == 0 || projects[i].id === projects.length) {
      rows.push(<Row>{cards}</Row>);
      cards = [];
    }
  }
    return rows;
 }
 
 loadExperience() {
   const experiences = this.state.experience.map(experience => {
     return(<div>
       <h3>{experience.Position}</h3>
       <div><i>{experience.Company}</i></div>
       <div className="experience-body">{experience.Description}</div>
       <div className="divider"></div>
       </div>
      )
   });
   
   return experiences;
 }

  render() {
    return (
      <div className="App">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="crossOrigin"
/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        <header className="App-header">
          <h1>Udall Mo</h1>
          <div>Software Developer</div>
          <div className="white_divider"></div>
          <div className="links">
            <Row> 
              <Col><a target="_blank" href="https://www.facebook.com/udall.mo"> <i class="fab fa-facebook"></i> </a></Col>
              <Col><a target="_blank" href="https://www.instagram.com/udall_mo/"> <i class="fab fa-instagram"></i></a></Col>
              <Col><a target="_blank" href="https://www.linkedin.com/in/udall-mo-a13b17127/"> <i class="fab fa-linkedin"></i> </a></Col>
              <Col><a target="_blank" href="https://github.com/udallmo"> <i class="fab fa-github-alt"></i> </a></Col>
            </Row>
          </div>
        </header>

        <div className="projects">
            <h3 className="heading">Projects</h3>
            {this.loadProjects()}
        </div>

        <div className="experience">
            <Container>
              <Row>
                <Col md="3"><h3 className="heading job">Work Experience</h3></Col>
                <Col className="job">{this.loadExperience()}</Col>
              </Row>
            </Container>
        </div> 
      </div>
    );
  }
}

export default App;
