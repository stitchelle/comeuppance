import React, { Component } from "react"
import { Button, Form, Col } from 'react-bootstrap'
import RewardManager from "../../modules/RewardManager"
import "./RewardForm.css"

class RewardEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        pointsId: "",
        rewardName: "",
        comeuppanceType: "",
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
            pointsId: Number(this.state.pointsId),
            name: this.state.rewardName,
            comeuppanceType: 1,
            id: this.props.match.params.rewardId,
        };

        RewardManager.update(editedReward)
            .then(() => this.props.history.push("/rewards"))
    }

    componentDidMount() {
        console.log(this.props.match.params.rewardId)
        RewardManager.get(this.props.match.params.rewardId)
            .then(reward => {
                console.log("reward", reward)
                this.setState({
                    userId: reward.userId,
                    pointsId: Number(reward.pointsId),
                    rewardName: reward.name,
                    comeuppanceType: 1,
                    loadingStatus: false,
                });
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
                                    id="pointsId"
                                    required
                                    onChange={this.handleFieldChange}
                                    value={this.state.pointsId}>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
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