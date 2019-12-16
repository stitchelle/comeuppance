import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap'
import RewardManager from '../../modules/RewardManager';
import './RewardForm.css'

class RewardForm extends Component {
    state = {
        userId: "",
        pointsId: "",
        rewardName: "",
        comeuppanceType: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create reward      object, invoke the RewardManager post method, and redirect to the full reward list
    */
    constructNewReward = evt => {
        evt.preventDefault();
        if (this.state.rewardName === "" || this.state.pointsId === "") {
            window.alert("Please input an reward information");
        } else {
            this.setState({ loadingStatus: true });

            const reward = {
                userId: sessionStorage.getItem("kidCredentials"),
                pointsId: Number(this.state.pointsId),
                name: this.state.rewardName,
                comeuppanceType: 1,
            };

            // Create the reward and redirect user to reward list
            RewardManager.post(reward)
                .then(() => this.props.history.push("/rewards"));
        }
    };

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
                                    id="rewardName"
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
                                onClick={this.constructNewReward}
                            >Submit</Button>
                        </div>
                    </fieldset>
                </Form>
            </>
        )
    }
}

export default RewardForm