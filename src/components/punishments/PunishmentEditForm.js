import React, { Component } from "react"
import { Button, Form, Col } from 'react-bootstrap'
import PunishmentManager from "../../modules/PunishmentManager"
import PointManager from "../../modules/PointManager"
import "./PunishmentForm.css"

class PunishmentEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        pointId: "",
        punishmentName: "",
        comeuppanceType: "",
        points:[],
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
            userId: Number(sessionStorage.getItem("kidCredentials")),
            pointId: Number(this.state.pointId),
            name: this.state.punishmentName,
            comeuppanceType: 2,
            id: this.props.match.params.punishmentId,
        };

        PunishmentManager.update(editedPunishment)
            .then(() => this.props.history.push("/punishments"))
    }

    componentDidMount() {
        Promise.all([
            PointManager.getAll(),
            PunishmentManager.get(this.props.match.params.punishmentId)
        ])
            .then(([points, punishment])=> {
                this.setState({
                    userId: punishment.userId,
                    pointId: Number(punishment.pointId),
                    punishmentName: punishment.name,
                    comeuppanceType: 2,
                    loadingStatus: false,
                    points: points
                });
            })

    }

    render() {
        return (
            <>
                <Form>
                    <fieldset>
                        <center><h2>EDIT PUNISHMENT</h2></center>

                        <Form.Row>
                            <Col className="alignLeft">
                                <Form.Control
                                    as="select"
                                    id="pointId"
                                    required
                                    onChange={this.handleFieldChange}
                                    value={this.state.pointId}
                                    >
                                    
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
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="punishmentName"
                                    value={this.state.punishmentName} />
                                <Form.Text className="text-muted">What Is The Punishment?</Form.Text>
                            </Col>
                        </Form.Row>
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
                </Form>
            </>
        );
    }
}

export default PunishmentEditForm