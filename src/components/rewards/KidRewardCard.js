import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap'
import HistoryManager from "../../modules/HistoryManager"

let picked = {}

class KidRewardCard extends Component {
    // for posting into history
    state = {
        userId: "",
        pointId: "",
        comeuppanceId: "",
        completed: "",
        timestamp: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the HistoryManager post method, and redirect to the full KidRewardCard 
    */
    constructNewHistory = evt => {
        let credentials =
            JSON.parse(sessionStorage.getItem("credentials"))
        console.log("picked", credentials.id)
        // evt.preventDefault();
        this.setState({ loadingStatus: true });
        const history = {
            userId: credentials.id,
            pointId: picked.pointId,
            comeuppanceId: picked.id,
            completed: null,
            timestamp: new Date().toISOString()

        };
        // Create the history and redirect user to ristory list
        HistoryManager.post(history)
        // .then(() => this.props.history.push("/history"));
    }



    pickRandomReward = () => {
        let randomValue = this.props.rewards[Math.floor(Math.random() * this.props.rewards.length)];
        alert(`YOU GOT: ${randomValue.name}`)
        picked = randomValue
        this.constructNewHistory()
    }

    render() {
        console.log("this.props.rewards", this.props.point.id)
        console.log("!-----")

        return (
            <>
                <Card>
                    <Card.Header as="h5">{this.props.point.numberOfPoints} Points</Card.Header>
                    <ListGroup>
                        {
                            this.props.rewards.map(reward =>
                                <ListGroup.Item>
                                    {reward.name}
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                    <Button
                        variant="dark"
                        size="sm"
                        onClick={() => {
                            this.pickRandomReward()
                        }}>
                        Redeem
                    </Button>
                </Card>
            </>
        )
    }
}

export default KidRewardCard;
