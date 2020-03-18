import React, { Component } from "react"
import { Button, Form, Col } from 'react-bootstrap'
import RewardManager from "../../modules/RewardManager"
import PointManager from "../../modules/PointManager"
import "./RewardForm.css"

class RewardEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        pointId: "",
        rewardName: "",
        comeuppanceType: "",
        points: [],
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingReward = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });

        const editedReward = {
            userId: Number(sessionStorage.getItem("kidCredentials")),
            pointId: Number(this.state.pointId),
            name: this.state.rewardName,
            comeuppanceType: 1,
            id: this.props.match.params.rewardId,
        };

        RewardManager.update(editedReward)
            .then(() => this.props.history.push("/rewards"))
    }

    componentDidMount() {
        Promise.all([
            PointManager.getAll(),
            RewardManager.get(this.props.match.params.rewardId)
        ])
            .then(([points, reward]) => {
                this.setState({
                    userId: reward.userId,
                    pointId: Number(reward.pointId),
                    rewardName: reward.name,
                    comeuppanceType: 1,
                    loadingStatus: false,
                    points: points
                })
            });
    }

    render() {
        return (
            <>
                <Form>
                    <fieldset>
                        <center><h2>EDIT REWARD</h2></center>

                        <Form.Row>
                            <Col className="alignLeft">
                                <Form.Control
                                    as="select"
                                    id="pointId"
                                    required
                                    onChange={this.handleFieldChange}
                                    value={this.state.pointId}>
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
                                    id="rewardName"
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    value={this.state.rewardName} />
                                <Form.Text className="text-muted">What Is The Reward?</Form.Text>
                            </Col>
                        </Form.Row>
                        <div className="alignRight">
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingReward}
                                className="btn btn-primary"
                            >Submit</Button>
                        </div>
                    </fieldset>
                </Form>
            </>
        );
    }
}

export default RewardEditForm