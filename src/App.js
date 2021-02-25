import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import ShowUser from "./components/ShowUser";
import UserPosts from "./components/UserPosts";
import UserTodos from "./components/UserTodos";
import UserAlbums from "./components/UserAlbums";

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={AllUsers} />
                    <Route exact path={"/user/:id"} component={ShowUser} />
                    <Route exact path={"/user/:id/posts"} component={UserPosts} />
                    <Route exact path={"/user/:id/todos"} component={UserTodos} />
                    <Route exact path={"/user/:id/albums"} component={UserAlbums} />
                    <Route exact path={"/addUser"} component={AddUser} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
