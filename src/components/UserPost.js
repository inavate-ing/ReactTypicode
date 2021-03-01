import React, {useState, useEffect} from 'react'
import {Button, Card, Navbar, Spinner} from "react-bootstrap";
import {Link, useParams, useHistory } from "react-router-dom";
import {getUserByID, getPostByID, getCommentsByPost, deletePostByID} from "../request/Request";
import ErrorMessage from "./ErrorMessage";

function UserPost() {

    let history = useHistory();

    const [User, setUser] = useState({})
    const [Post, setPost] = useState({})
    const [Comments, setComments] = useState([])
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);

    let {id: postID} = useParams();


    useEffect(() => {
        getPostByID(postID).then((data) => {
            setPost(data);

            getUserByID(data.userId).then((user) => {
                setUser(user)
            }).catch((reason) => {
                setError(reason)
            }).finally(() => {
                setLoading(false)
            })

            getCommentsByPost(postID).then((comments) => {
                setComments(comments)
            }).catch((reason) => {
                setError(reason)
            }).finally(() => {
                setLoading(false)
            })

        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })


    }, [postID])

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
                <Link to={"/user/" + Post.userId + "/posts"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="ml-3"> {User.name}'s Post </Navbar.Brand>

            </Navbar>

            <Card className="userInfo" text="white">
                <Card.Body>

                    <Card.Title>{Post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@{User.username}</Card.Subtitle>

                    <Card.Text>
                        {Post.body}
                    </Card.Text>

                    <Button variant="outline-danger " onClick={() => {deletePostByID(Post.id).then(() => {
                        history.goBack()
                    })}}>Delete Post</Button>

                </Card.Body>
            </Card>

            <h3 className="heading">Comments</h3>

            {
                Comments.map((Comments, idx) => (
                    <Card className="commentCard" text="white" key={idx}>
                        <Card.Body>

                            <Card.Title>{Comments.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{Comments.email}</Card.Subtitle>

                            <Card.Text>
                                {Comments.body}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default UserPost;
