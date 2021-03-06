import React, { Component } from 'react'
//import the components we will need
import KidRewardCard from './KidRewardCard'
import PointManager from '../../modules/PointManager'
import RewardManager from "../../modules/RewardManager"
import { Card } from 'react-bootstrap'

class KidRewardList extends Component {
    //define what this component needs to render
    state = {
        points: [],
        rewards: []
    }

    componentDidMount() {
        //getAll from PointManager and hang on to that data; put it in state
        // Parse all the getAllByPoints
        let credentials =
            JSON.parse(sessionStorage.getItem("credentials"))

        Promise.all([
            PointManager.getAll(),
            RewardManager.getAllByPoints(credentials.id, 1),
            RewardManager.getAllByPoints(credentials.id, 2),
            RewardManager.getAllByPoints(credentials.id, 3),
            RewardManager.getAllByPoints(credentials.id, 4)
        ])
            .then(([points, rewards1, rewards2, rewards3, rewards4]) => {
                this.setState({
                    points: points,
                    rewards: [rewards1, rewards2, rewards3, rewards4]
                })
            })
    }

    render() {
        return (
            <>
                <Card style={{backgroundColor: "#ccdefa"}}>
                    <Card.Header><center><h3>Rewards</h3></center></Card.Header>
                    {
                        this.state.points.map((point, index) => <KidRewardCard key={point.id} point={point} rewards={this.state.rewards[index]} />
                        )
                    }
                </Card>
            </>
        )
    }
}

export default KidRewardList