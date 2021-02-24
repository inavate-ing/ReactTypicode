import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={AddUser} />
                    <Route path="/edit/:id" component={EditUser} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
