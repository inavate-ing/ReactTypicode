import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import './App.css';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
    return (
        <div className="App container">
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
                <Switch>

                    <h1>All Users</h1>

                    <AddUser/>
                    <EditUser/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
