import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import PunishmentManager from '../../modules/PunishmentManager';
import './PunishmentForm.css'

class PunishmentForm extends Component {
    state = {
        userId: "",
        point: "",
        rewardName: "",
        comeuppanceType: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create punishment object, invoke the PunishmentManager post method, and redirect to the full punishment list
    */
    constructNewPunishment = evt => {
        evt.preventDefault();
        if (this.state.punishmentName === "") {
            window.alert("Please input an punishment name");
        } else {
            this.setState({ loadingStatus: true });
            const reward = {
                userId: this.state.userId,
                points: null,
                name: this.state.punishmentName,
                comeuppanceType: 2,
            };

            // Create the punishment and redirect user to punishment list
            PunishmentManager.post(reward)
                .then(() => this.props.history.push("/punishments"));
        }
    };

    render() {
        console.log(this.props.kidId)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="punishmentName"
                                placeholder="Punishment"
                            />
                            <label htmlFor="punishmentName">Name</label>
                        </div>
                        <div className="alignRight">
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewPunishment}
                            >Submit</Button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PunishmentForm