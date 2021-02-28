import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import {Button, Navbar} from "react-bootstrap";
import {getPostsByUser, getUserByID} from "../request/Request";


function UserPosts() {

    const [Posts, setPosts] = useState([])
    const [User, setUser] = useState({})

    let { id: userID } = useParams();

    useEffect(() => {
        getUserByID(userID).then((data) => {
            setUser(data);
        })
        getPostsByUser(userID).then((data) => {
            setPosts(data);
        })
    }, [userID])



    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto"> {User.name}'s Posts </Navbar.Brand>
                <Link to={"/newPost?userId="+userID}>
                    <Button className="nav-button">Create New User</Button>
                </Link>
            </Navbar>


            {
                Posts.map((Posts, idx) => (
                    <Link key={idx} to={"/posts/" + Posts.id}>
                        <div className="postsCard">
                            {Posts.title}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserPosts;
