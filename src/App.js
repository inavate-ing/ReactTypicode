import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DataFetching from "./Api/DataFetching";
import ShowUser from "./Api/ShowUser";
import UserPosts from "./Api/UserPosts";
import UserTodos from "./Api/UserTodos";
import UserAlbums from "./Api/UserAlbums";

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={DataFetching} />
                    <Route exact path={"/user/:id"} component={ShowUser} />
                    <Route exact path={"/user/:id/posts"} component={UserPosts} />
                    <Route exact path={"/user/:id/todos"} component={UserTodos} />
                    <Route exact path={"/user/:id/albums"} component={UserAlbums} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
