import React, { Component } from 'react';
import { Button, Card, Row,Col } from 'react-bootstrap'

class RewardCard extends Component {
    render() {
        console.log("yo", this.props.reward.point.numberOfPoints)
        return (
            <Card className="text-center">
                <Card.Body>
                    {/* <div className="card">
                        <div className="card-content"> */}
                            {/* <picture>
                                <img src={require('./dog.svg')} alt="My Dog" />
                            </picture> */}
                            <Row>
                                <Col>
                                    <Card.Text className="card-rewardpoints">{this.props.reward.point.numberOfPoints} Points</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="card-rewardname"><strong>{this.props.reward.name}</strong></Card.Text>
                                </Col>

                            <Button type="button"
                                variant="dark" 
                                ariant="outline-secondary"
                                size="sm"
                                onClick={() => { this.props.history.push(`/rewards/${this.props.reward.id}/edit`) }}>Edit
                            </Button>
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                size="sm"
                                onClick={() => this.props.deleteReward(this.props.reward.id)}
                            >Delete</Button>
                            </Row>
                        {/* </div>
                    </div> */}
                </Card.Body>
            </Card>
        );
    }
}


export default RewardCard;
