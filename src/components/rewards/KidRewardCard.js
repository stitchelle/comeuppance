import React, { Component } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'
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
                <CardGroup>
                    <Card>
                        <Card.Header as="h5">{this.props.point.numberOfPoints} Points</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {
                                    this.props.rewards.map(reward =>
                                        <Card>
                                            <Card.Body>
                                                <h5>{reward.name}</h5>
                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            </Card.Title>
                            <Button variant="dark" onClick={
                                () => {

                                this.pickRandomReward()

                                }}>Redeem</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default KidRewardCard;
