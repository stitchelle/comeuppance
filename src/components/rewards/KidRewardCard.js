import React, { Component } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'

class KidRewardCard extends Component {
    pickRandomReward = () => {
        let randomValue = this.props.rewards[Math.floor(Math.random() * this.props.rewards.length)];
        alert(`YOU GOT: ${randomValue.name}`)
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
                            <Button variant="dark" onClick={() => {this.pickRandomReward()}}>Redeem</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default KidRewardCard;
