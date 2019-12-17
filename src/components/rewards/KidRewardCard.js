import React, { Component } from 'react';
import { Button, Card, Row } from 'react-bootstrap'

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

export default KidRewardCard;
