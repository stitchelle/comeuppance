import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap'
import HistoryManager from "../../modules/HistoryManager"

let picked = {}


class KidPunishmentCard extends Component {
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

    pickRandomPunishment = () => {
        let randomValue = this.props.punishments[Math.floor(Math.random() * this.props.punishments.length)];
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
                            this.props.punishments.map(punishment =>
                                <ListGroup.Item>
                                    {punishment.name}
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                    <Button
                        variant="dark"
                        size="sm"
                        onClick={() => {
                            this.pickRandomPunishment()
                        }}>
                        Redeem
                    </Button>
                </Card>
            </>
        )
    }
}

export default KidPunishmentCard;
