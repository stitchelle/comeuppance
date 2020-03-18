import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import KidManager from '../../modules/KidManager';
import './KidForm.css'

class KidForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        loadingStatus: false,
        confirmPassword: "",
        isParent: "",
        points: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewKid = evt => {
        evt.preventDefault();
        if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
            window.alert("Please Input All Kid's Fields");
        } else {
            this.setState({ loadingStatus: true });
            const userId = JSON.parse(sessionStorage.getItem("credentials"))

            const kid = {
                username: this.state.username,
                email: this.state.email,
                password: String(this.state.password),
                isParent: false,
                points: 0,
            };
            KidManager.post(kid)
                .then((response) => {
                    const relationship = {
                        parentId: userId.id,
                        userId: response.id
                    };
                    KidManager.postRelationship(relationship)
                        .then((relationship) => {
                            this.props.updateRelationships()
                            sessionStorage.setItem("kidCredentials", relationship.id)
                            this.props.history.push(`/kid/${relationship.id}`)
                        })
                });
        }
    };

    render() {
        return (
            <>
                <Form>
                    <fieldset>
                        <center><strong><h1>Add New Kid</h1></strong></center>

                        <Form.Group id="formBasicName">
                            <Form.Label>Kid Name</Form.Label>
                            <Form.Control
                                id="username"
                                type="text"
                                placeholder="Kids Name"
                                required
                                onChange={this.handleFieldChange} />
                        </Form.Group>

                        <Form.Group id="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={this.handleFieldChange} />
                        </Form.Group>

                        <Form.Group id="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                placeholder="Password"
                                required
                                onChange={this.handleFieldChange} />
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="dark"
                            ariant="outline-secondary"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewKid}>
                            Submit
                        </Button>
                    </fieldset>
                </Form>
            </>
        )
    }
}

export default KidForm