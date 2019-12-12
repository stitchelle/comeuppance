import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap'

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
                            <h3>Name: <span className="card-rewardname">{this.props.reward.name}</span></h3>
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