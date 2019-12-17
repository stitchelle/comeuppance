import React, { Component } from 'react'
//import the components we will need
import KidRewardCard from './KidRewardCard'
import PointManager from '../../modules/PointManager'
import RewardManager from "../../modules/RewardManager"

class KidRewardList extends Component {
    //define what this component needs to render
    state = {
        points: [],
    }

componentDidMount(){
    console.log("KID REWARD LIST: ComponentDidMount");
    //getAll from PointManager and hang on to that data; put it in state
    PointManager.getAll()
    .then((points) => {
        console.log("bob",points)
        this.setState({
            points: points
        })
    })
}

render(){
    console.log("Points LIST: Render");

    return(
        <div className="container-cards">
            <h3>Rewards</h3>
            {this.state.points.map(point => <KidRewardCard key={point.id} point={point}/>)}
        </div>
    )
}
}

export default KidRewardList