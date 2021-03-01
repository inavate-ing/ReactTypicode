import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import {Button, Navbar, Spinner} from "react-bootstrap";
import {getPostsByUser, getUserByID} from "../request/Request";
import ErrorMessage from "./ErrorMessage";


function UserPosts() {

    const [Posts, setPosts] = useState([])
    const [User, setUser] = useState({})

    let { id: userID } = useParams();
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getUserByID(userID).then((data) => {
            setUser(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })
        getPostsByUser(userID).then((data) => {
            setPosts(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })
    }, [userID])

    if (Loading) {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">


                <Spinner animation="border" variant="white"/>

            </div>
        )
    }

    if (Error) {
        return (<ErrorMessage message={Error}/>)
    }



    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto ml-3"> {User.name}'s Posts </Navbar.Brand>
            </Navbar>

            <Link to={"/newPost?userId="+userID}>
                <Button className="newButton">Create New Post</Button>
            </Link>


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
