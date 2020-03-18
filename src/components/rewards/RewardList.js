import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
//import the components we will need
import RewardCard from './RewardCard';
import RewardManager from '../../modules/RewardManager';
import KidRewardList from "./KidRewardList"
import Helper from '../Helper'

class RewardList extends Component {
    //define what this component needs to render
    state = {
        rewards: [],
    }

    componentDidMount() {

        RewardManager.getAll(sessionStorage.getItem("kidCredentials"))
            .then((rewards) => {
                this.setState({
                    rewards: rewards
                })
            })
    }

    deleteReward = id => {
        RewardManager.delete(id)
            .then(() => {
                RewardManager.getAll(sessionStorage.getItem("kidCredentials"))
                    .then((newRewards) => {
                        this.setState({
                            rewards: newRewards
                        })
                    })
            })
    }

    render() {

        if (Helper.isParent(sessionStorage) !== false) {
            return (
                <>
                    <Card style={{ backgroundColor: "#ccdefa" }}>
                        <Card.Header><center><h1>Rewards</h1></center></Card.Header>
                        <Button type="button"
                            className="btn"
                            variant="dark"
                            size="lg"
                            block
                            ariant="outline-secondary"
                            onClick={() => { this.props.history.push("/rewards/new") }}>
                            Add Reward
                        </Button>
                    </Card>
                    <Card>
                        {this.state.rewards.map(reward =>
                            <RewardCard
                                key={reward.id}
                                reward={reward}
                                deleteReward={this.deleteReward}
                                {...this.props} />
                        )}
                    </Card>
                </>
            )
        } else {
            return (
                <KidRewardList />
            )
        }
    }

}

export default RewardList