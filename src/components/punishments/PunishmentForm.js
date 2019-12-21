import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap'
import PunishmentManager from '../../modules/PunishmentManager';
import PointManager from "../../modules/PointManager"
import './PunishmentForm.css'

class PunishmentForm extends Component {
    state = {
        userId: "",
        pointId: "",
        punishmentName: "",
        comeuppanceType: "",
        loadingStatus: false,
        points: []
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
        if (this.state.punishmentName === "" || this.state.pointId === "") {
            window.alert("Please input an punishment name");
        } else {
            this.setState({ loadingStatus: true });
            const reward = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                pointId: Number(this.state.pointId),
                name: this.state.punishmentName,
                comeuppanceType: 2,
            };

            // Create the punishment and redirect user to punishment list
            PunishmentManager.post(reward)
                .then(() => this.props.history.push("/punishments"));
        }
    };

    componentDidMount() {
        PointManager.getAll()
            .then((points) => {
                this.setState({
                    points: points
                })
            })
    }

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
                                    id="pointId"
                                    required
                                    onChange={this.handleFieldChange}>
                                    <option>select points</option>
                                    {/* <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option> */}

                                    {this.state.points.map(point => {
                                        return (
                                            <option value={point.id} key={point.id}>{point.numberOfPoints}</option>
                                        )
                                    }
                                    )}
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