import React, { Component } from "react"
import {Button } from 'react-bootstrap'
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
            email: null,
            password: null,
            isParent: false,
            points: null,
            id: this.props.match.params.kidId
        };

        KidManager.update(editedKid, editedKid.id)
            .then(() => this.props.history.push("/"))
    }

    componentDidMount() {
        
        KidManager.get(this.props.match.params.kidId)
            .then(kid => {
                console.log("kid",kid.username)
                this.setState({
                    username: kid.username,
                    email: null,
                    password: null,
                    isParent: false,
                    points: null,
                });console.log(this.state)
            });
    }

    render() {
        return (
            <>
                <form>
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
                </form>
            </>
        );
    }
}

export default KidEditForm