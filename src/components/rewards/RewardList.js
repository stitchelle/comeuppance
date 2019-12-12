import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
//import the components we will need
import RewardCard from './RewardCard';
import RewardManager from '../../modules/RewardManager';

class RewardList extends Component {
    //define what this component needs to render
    state = {
        rewards: [],
    }

componentDidMount(){
    console.log("REWARD LIST: ComponentDidMount");
    console.log("getAll",RewardManager.getAll())
    //getAll from RewardManager and hang on to that data; put it in state
    RewardManager.getAll()
    .then((rewards) => {
        this.setState({
            rewards: rewards
        })
    })
}

deleteReward = id => {
    RewardManager.delete(id)
    .then(() => {
      RewardManager.getAll()
      .then((newRewards) => {
        this.setState({
            rewards: newRewards
        })
      })
    })
  }
  pickRandomReward = () => {
      let randomValue = this.state.rewards[Math.floor(Math.random() * this.state.rewards.length)];
      alert(`YOU GOT: ${randomValue.name}`)
  }

render(){
    console.log("RewardList: Render");
    return(
        <>
        
            <br/>
            <section className="section-content">
            <Button type="button"
                className="btn"
                variant="dark" ariant="outline-secondary"
                onClick={() => {this.props.history.push("/rewards/new")}}>
                Add Reward
            </Button>
            </section>
            <br/>  
            <div className="container-cards">
            {this.state.rewards.map(reward =>
            <RewardCard 
            key={reward.id} 
            reward={reward} 
            deleteReward={this.deleteReward}
            {...this.props}/>
            )}
            </div>
            <br/>
            <section className="section-content">
            <Button type="button"
                className="btn"
                variant="dark" ariant="outline-secondary"
                onClick={() => {this.pickRandomReward()}}
                >
                Pick Random Reward
            </Button>
            </section>
            <br/>
        </>
    )
  }
}

export default RewardList