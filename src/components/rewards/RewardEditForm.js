import React, { Component } from "react"
import {Button} from 'react-bootstrap'
import RewardManager from "../../modules/RewardManager"
import "./RewardForm.css"

class RewardEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        point: "",
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
            points: null,
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
                console.log("reward",reward)
                this.setState({
                    userId: reward.userId,
                    points: null,
                    rewardName: reward.name,
                    comeuppanceType: 1,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                <br />
                    <center><strong><h1>Edit Reward</h1></strong></center>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="rewardName"
                                value={this.state.rewardName}
                            />
                            <label htmlFor="rewardName">Reward</label>
                        </div>
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
                </form>
            </>
        );
    }
}

export default RewardEditForm