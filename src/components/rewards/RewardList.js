import React, { Component } from 'react'
//import the components we will need
import RewardCard from './RewardCard'
import RewardManager from '../../modules/RewardManager'

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

render(){
    console.log("RewardList: Render");
    return(
      <div className="container-cards">
        {this.state.rewards.map(reward =>
          <RewardCard key={reward.id} reward={reward} />
        )}
      </div>
    )
  }
}

export default RewardList