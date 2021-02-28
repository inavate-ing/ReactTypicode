import React, {useState, useEffect} from 'react'
import {Button, Card, Navbar} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getUserByID, getPostByID, getCommentsByPost, deletePostByID} from "../request/Request";

function UserPost() {

    const [User, setUser] = useState({})
    const [Post, setPost] = useState({})
    const [Comments, setComments] = useState([])

    let {id: postID} = useParams();


    useEffect(() => {
        getPostByID(postID).then((data) => {
            setPost(data);
            getUserByID(data.userId).then((user) => {
                setUser(user)
            })

            getCommentsByPost(postID).then((comments) => {
                setComments(comments)
            })
        })


    }, [postID])


    return (
        <div>


            <Navbar variant="dark" id="navbar">
                <Link to={"/user/" + Post.userId + "/posts"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto"> {User.name}'s Post </Navbar.Brand>

                <Button variant="outline-danger" onClick={() => {
                    deletePostByID(Post.id)
                }}>Delete Post</Button>
            </Navbar>

            <Card className="userInfo" text="white">
                <Card.Body>

                    <Card.Title>{Post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@{User.username}</Card.Subtitle>

                    <Card.Text>
                        {Post.body}
                    </Card.Text>

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
