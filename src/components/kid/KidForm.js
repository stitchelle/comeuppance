import React, { Component } from 'react';
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
        if (this.state.name === "") {
            window.alert("Please Input Kid's Name");
        } else {
            this.setState({ loadingStatus: true });
            const userId = JSON.parse(sessionStorage.getItem("credentials"))

            const kid = {
                username: this.state.username,
                email: null,
                password: null,
                isParent: false,
                points: null,
            };
            KidManager.post(kid)
                .then((response) => {
                    const relationship = {
                        parentId: userId.id,
                        userId: response.id
                    };
                    KidManager.postRelationship(relationship)
                    .then((relationship) => {this.props.updateRelationships()
                    console.log(relationship.id)
                    this.props.history.push(`/kid/${relationship.id}`)
                })
            });

        }

    };

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
                            onChange={this.handleFieldChange} id="username" placeholder="Kid Name" />
                            <label htmlFor="kidName">Name</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewKid}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default KidForm