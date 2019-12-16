import React, { Component } from "react"
import {Button, Form } from 'react-bootstrap'
import KidManager from "../../modules/KidManager"
import "./KidForm.css"

class KidEditForm extends Component {
    //set the initial state
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
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingKid = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        // const userId = JSON.parse(sessionStorage.getItem("credentials"))

        const editedKid = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            isParent: false,
            points: this.state.points,
            id: this.props.match.params.kidId
        };

        KidManager.update(editedKid, editedKid.id)
            .then(this.props.updateRelationships)
            .then(() => this.props.history.push("/"))
    }

    componentDidMount() {
        
        KidManager.get(this.props.match.params.kidId)
            .then(kid => {
                console.log("kid",kid.username)
                this.setState({
                    username: kid.username,
                    email: kid.email,
                    password: kid.password,
                    isParent: false,
                    points: kid.points,
                });console.log(this.state)
            });
    }

    render() {
        return (
            <>
                {/* <form>
                    <br />
                    <center><strong><h1>Add New Kid</h1></strong></center>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="username"
                                value={this.state.username}
                            />
                            <label htmlFor="username">Name </label>
                        </div>
                        <div className="alignRight">
                            <Button
                                type="button" 
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingKid}
                                className="kidButton" variant="dark" ariant="outline-secondary"
                            >Submit</Button>
                        </div>
                    </fieldset>
                </form> */}
                <Form>
                    <fieldset>
                        <center><strong><h1>Edit Kid</h1></strong></center>

                        <Form.Group id="formBasicName">
                            <Form.Label>Kid Name</Form.Label>
                            <Form.Control
                                id="username" 
                                type="text" 
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                value={this.state.username}/>
                        </Form.Group>

                        <Form.Group id="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            id="email"
                            type="email" 
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            value={this.state.email}/>
                        </Form.Group>

                        <Form.Group id="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                id="password" 
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                value={this.state.password} />
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="dark" 
                            ariant="outline-secondary"
                            disabled={this.state.loadingStatus}
                            onClick={this.updateExistingKid}>
                            Submit
                        </Button>
                    </fieldset>
                </Form>
            </>
        );
    }
}

export default KidEditForm