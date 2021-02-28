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
import UserPost from "./components/UserPost";
import newPost from "./components/newPost";
import newTodo from "./components/newTodo";

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
                    <Route exact path={"/posts/:id"} component={UserPost} />
                    <Route exact path={"/addUser"} component={AddUser} />
                    <Route exact path={"/newPost"} component={newPost} />
                    <Route exact path={"/newTodo"} component={newTodo} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
