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
        this.setState({ loadingStatus: true });
        const history = {
            userId: credentials.id,
            pointId: picked.pointId,
            comeuppanceId: picked.id,
            completed: false,
            timestamp: new Date().toISOString()

        };
        HistoryManager.post(history)
    }



    pickRandomReward = () => {
        let randomValue = this.props.rewards[Math.floor(Math.random() * this.props.rewards.length)];
        alert(`YOU GOT: ${randomValue.name}`)
        picked = randomValue
        this.constructNewHistory()
    }

    render() {
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
