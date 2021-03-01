import React, {useState, useEffect} from 'react'
import {Button, Card, Navbar, Spinner} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getUserByID, getAlbumByID, getPhotoByAlbum} from "../request/Request";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ErrorMessage from "./ErrorMessage";

function UserPost() {

    const [User, setUser] = useState({})
    const [Album, setAlbum] = useState({})
    const [Photos, setPhotos] = useState([])
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true)

    let {albumId: albumID} = useParams();


    useEffect(() => {
        getAlbumByID(albumID).then((data) => {
            setAlbum(data);
            getUserByID(data.userId).then((user) => {
                setUser(user)
            }).catch((reason) => {
                setError(reason)
            }).finally(() => {
                setLoading(false)
            })

            getPhotoByAlbum(albumID).then((comments) => {
                setPhotos(comments)
            }).catch((reason) => {
                setError(reason)
            }).finally(() => {
                setLoading(false)
            })
        })


    }, [albumID])

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
                <Link to={"/user/" + Album.userId + "/albums"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto ml-3"> {User.name}'s Album </Navbar.Brand>
            </Navbar>

            <Card className="userInfo" text="white">
                <Card.Body>

                    <Card.Title>{Album.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@{User.username}</Card.Subtitle>

                    <Card.Text>
                        {Album.body}
                    </Card.Text>

                </Card.Body>
            </Card>

            <h3 className="heading">Photos</h3>

            {
                Photos.map((Photos, idx) => (
                    <Card className="commentCard" text="white" key={idx}>
                        <Card.Body>

                            <Card.Title>{Photos.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{Photos.email}</Card.Subtitle>

                            <Card.Text className="d-flex flex-row align-items-center">
                                <div className="">

                                    <LazyLoadImage alt={Photos.title}
                                                   height={150}
                                                   src={Photos.thumbnailUrl} // use normal <img> attributes as props
                                                   width={150}/>

                                </div>

                                <Card.Title className="ml-3">{Photos.title}</Card.Title>


                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default UserPost;
