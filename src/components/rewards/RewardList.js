import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//import the components we will need
import RewardCard from './RewardCard';
import RewardManager from '../../modules/RewardManager';
import KidRewardList from "./KidRewardList"

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
                        console.log("new", newRewards)
                        this.setState({
                            rewards: newRewards
                        })
                    })
            })
    }
    // pickRandomReward = () => {
    //     let randomValue = this.state.rewards[Math.floor(Math.random() * this.state.rewards.length)];
    //     alert(`YOU GOT: ${randomValue.name}`)
    // }

    isParent = () => {
        let Parent = JSON.parse(sessionStorage.getItem("credentials"))
        console.log("RewardList: Render", Parent.isParent);
        return (
            Parent.isParent
        )
    }

    render() {
        
        if (this.isParent() !== false) {
            return (
                <>
                <center><strong><h1>Rewards</h1></strong></center>
                    <section className="section-content">
                        <Button type="button"
                            className="btn"
                            variant="dark" ariant="outline-secondary"
                            onClick={() => { this.props.history.push("/rewards/new") }}>
                            Add Reward
                    </Button>
                    </section>
                    <br />
                    <div className="container-cards">
                        {this.state.rewards.map(reward =>
                            <RewardCard
                                key={reward.id}
                                reward={reward}
                                deleteReward={this.deleteReward}
                                {...this.props} />
                        )}
                    </div>
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