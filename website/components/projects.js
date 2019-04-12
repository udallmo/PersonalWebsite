import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const strapi = new Strapi('http://localhost:1337');

// TODO make them into components
class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        }
    }

    async componentDidMount() {
        const constent = await strapi.getEntries('contents');
        console.log(response);
        
        if (!response.ok) {
            alert('X');
          return
        }
    
        this.setState({ content });
      }

    render() {
        return(
            <div className="Projects">
                <div className="Project-container">
                    {this.state.content.map( info => {
                        return(<div className="Project-container">{info.title}</div>)
                    })}
                </div>
            </div>
        );
    }
}