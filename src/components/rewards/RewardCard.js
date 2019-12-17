import React, { Component } from 'react';
import { Button, Card, Row } from 'react-bootstrap'

class RewardCard extends Component {
    render() {
        console.log("yo",this.props.reward.point.numberOfPoints)
        return (
            <Card className="text-center">
                <Card.Body>
                    <div className="card">
                        <div className="card-content">
                            {/* <picture>
                                <img src={require('./dog.svg')} alt="My Dog" />
                            </picture> */}
                            <Row>
                                <Card.Subtitle className="card-rewardpoints">Points:{this.props.reward.point.numberOfPoints}</Card.Subtitle>
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


export default RewardCard;
