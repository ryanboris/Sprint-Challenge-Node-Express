import React from 'react';
import { Link } from 'react-router-dom'


const Projects = (props) => {
    return (
        <div className="App">
            {props.projects.map(project => {
                return (
                    <div key={project.id}>
                        <Link to={`/actions/${project.id}`}><p>Name: {project.name}</p></Link>
                        <p>Description: {project.description}</p>
                        <p>Project ID: {project.id}</p>
                        <p>Complete? {project.completed ? <span>Yes!</span> : <span>No!</span>} </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
