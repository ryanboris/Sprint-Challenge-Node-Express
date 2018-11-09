import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Projects from './projects';
import { Route } from 'react-router';
import Actions from './actions';

class App extends Component {
    state = {
        projects: [],
        actions: []
    };

    componentDidMount() {
        axios
            .get('http://localhost:8000/projects')
            .then(res => {
                this.setState({
                    projects: res.data
                });
            })
            .catch(e => console.log(e, 'error'));

        axios
            .get('http://localhost:8000/projects/1/actionlist')
            .then(res => {
                this.setState({
                    actions: res.data
                });
            })
            .catch(e => console.log(e, 'error'));
    }

    render() {
        return (
            <div>
                <Route exact path="/" render={props => <Projects {...props} projects={this.state.projects} />} />
                <Route path="/actions/:id" render={props => <Actions {...props} actions={this.state.actions} />} />
            </div>
        );
    }
}

export default App;
