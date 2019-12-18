import React, { Component } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'

class KidRewardCard extends Component {
    render() {
        console.log("this.props.rewards", this.props.rewards)
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
                            <Button variant="dark">Pick</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default KidRewardCard;
