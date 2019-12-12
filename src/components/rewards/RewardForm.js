import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import RewardManager from '../../modules/RewardManager';
import './RewardForm.css'

class RewardForm extends Component {
    state = {
        name: "",
        loadingStatus: false,
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
        if (this.state.rewardName === "") {
            window.alert("Please input an reward name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const reward = {
                name: this.state.rewardName,
            };

            // Create the reward and redirect user to reward list
            RewardManager.post(reward)
                .then(() => this.props.history.push("/rewards"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="rewardName"
                                placeholder="Reward"
                            />
                            <label htmlFor="rewardName">Name</label>
                        </div>
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
                </form>
            </>
        )
    }
}

export default RewardForm