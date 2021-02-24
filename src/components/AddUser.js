import React, {Component} from 'react';
import {Navbar, Form, Col, Button} from 'react-bootstrap';

class AddUser extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Add User</Navbar.Brand>
                </Navbar>
                <Form Id="addUserForm">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddUser;

