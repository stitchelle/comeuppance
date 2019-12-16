import React, { Component } from 'react';
import { Button, Card, Row } from 'react-bootstrap'

class RewardCard extends Component {
    render() {
        return (
            <Card className="text-center">
                <Card.Body>
                    <div className="card">
                        <div className="card-content">
                            {/* <picture>
                                <img src={require('./dog.svg')} alt="My Dog" />
                            </picture> */}
                            <Row>
                                <Card.Subtitle className="card-rewardpoints">Points:{this.props.reward.pointsId}</Card.Subtitle>
                                <Card.Title className="card-rewardname">{this.props.reward.name}</Card.Title>

                            </Row>
                            <Button type="button"
                                variant="dark" ariant="outline-secondary"
                                onClick={() => { this.props.history.push(`/rewards/${this.props.reward.id}/edit`) }}>Edit
                            </Button>
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                onClick={() => this.props.deleteReward(this.props.reward.id)}
                            >Delete</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

class KidRewardCard extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">5 Points</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button variant="dark">Redeem</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RewardCard;
export default KidRewardCard;