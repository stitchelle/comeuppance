import React, { Component } from 'react';
import { Button, Form, Col} from 'react-bootstrap'
import PunishmentManager from '../../modules/PunishmentManager';
import './PunishmentForm.css'

class PunishmentForm extends Component {
    state = {
        userId: "",
        pointsId: "",
        punishmentName: "",
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
        if (this.state.punishmentName === "" || this.state.pointsId === "") {
            window.alert("Please input an punishment name");
        } else {
            this.setState({ loadingStatus: true });
            const reward = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                pointsId: Number(this.state.pointsId),
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
                <Form>
                    <fieldset>
                        <center><h2>ADD PUNISHMENT</h2></center>

                        <Form.Row>
                            <Col className="alignLeft">
                                <Form.Control 
                                    as="select" 
                                    id="points" 
                                    required
                                    onChange={this.handleFieldChange}>
                                    <option>select points</option>    
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                </Form.Control>
                                <Form.Text className="text-muted">Select Number of Points</Form.Text>
                            </Col>
                            <Col className="alignLeft">

                                <Form.Control
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="punishmentName"
                                    placeholder="Punishment" />
                                <Form.Text className="text-muted">What Is The Punishment?</Form.Text>
                            </Col>
                        </Form.Row>
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
                </Form>
            </>
        )
    }
}

export default PunishmentForm