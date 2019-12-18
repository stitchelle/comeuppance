import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap'
import RewardManager from '../../modules/RewardManager';
import PointManager from "../../modules/PointManager"
import './RewardForm.css'

class RewardForm extends Component {
    state = {
        userId: "",
        pointId: "",
        rewardName: "",
        comeuppanceType: "",
        loadingStatus: false,
        points: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
    };

    /*  Local method for validation, set loadingStatus, create reward      object, invoke the RewardManager post method, and redirect to the full reward list
    */
    constructNewReward = evt => {
        evt.preventDefault();
        if (this.state.rewardName === "" || this.state.pointId === "") {
            window.alert("Please input an reward information");
        } else {
            this.setState({ loadingStatus: true });

            const reward = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                pointId: Number(this.state.pointId),
                name: this.state.rewardName,
                comeuppanceType: 1,
            };

            // Create the reward and redirect user to reward list
            RewardManager.post(reward)
                .then(() => this.props.history.push("/rewards"));
        }
    };

    componentDidMount() {
        PointManager.getAll()
            .then((points) => {
                console.log("bob", points)
                this.setState({
                    points: points
                })
            })
    }

    render() {

        return (
            <>
                <Form>
                    <fieldset>
                        <center><h2>ADD REWARD</h2></center>

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
                                    id="rewardName"
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    placeholder="Reward" />
                                <Form.Text className="text-muted">What Is The Reward?</Form.Text>
                            </Col>
                        </Form.Row>
                        <div className="alignRight">
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewReward}>
                                Submit
                            </Button>
                        </div>
                    </fieldset>
                </Form>
            </>
        )
    }
}

export default RewardForm