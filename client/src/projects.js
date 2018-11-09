import React from 'react';
import { Link } from 'react-router-dom'
import { DivAct } from './actions'
import { CardAct } from './actions'


const Projects = (props) => {
    return (
        <DivAct>
            {props.projects.map(project => {
                return (
                    <CardAct key={project.id}>
                        <Link to={`/actions/${project.id}`}><p>Name: {project.name}</p></Link>
                        <p>Description: {project.description}</p>
                        <p>Project ID: {project.id}</p>
                        <p>Complete? {project.completed ? <span>Yes!</span> : <span>No!</span>} </p>
                    </CardAct>
                );
            })}
        </DivAct>
    );
};

export default Projects;
