import React, { Component } from "react"
import { Button } from 'react-bootstrap'
import PunishmentManager from "../../modules/PunishmentManager"
import "./PunishmentForm.css"

class PunishmentEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        point: "",
        punishmentName: "",
        comeuppanceType: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingPunishment = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedPunishment = {
            userId: sessionStorage.getItem("kidCredentials"),
            points: null,
            name: this.state.punishmentName,
            comeuppanceType: 2,
            id: this.props.match.params.punishmentId,
        };

        PunishmentManager.update(editedPunishment)
            .then(() => this.props.history.push("/punishments"))
    }

    componentDidMount() {
        PunishmentManager.get(this.props.match.params.punishmentId)
            .then(punishment => {
                console.log("punishment", punishment)
                this.setState({
                    userId: punishment.userId,
                    points: null,
                    punishmentName: punishment.name,
                    comeuppanceType: 2,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <br />
                    <center><strong><h1>Edit Punishment</h1></strong></center>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="punishmentName"
                                value={this.state.punishmentName}
                            />
                            <label htmlFor="punishmentName">Punishment</label>
                        </div>
                        <div className="alignRight">
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingPunishment}
                                className="btn btn-primary"
                            >Submit</Button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default PunishmentEditForm