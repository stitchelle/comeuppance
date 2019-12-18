import React, { Component } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'

class KidRewardCard extends Component {
    render() {
        return (
            <>
                <CardGroup>
                    <Card>
                        <Card.Header as="h5">{this.props.point.numberOfPoints}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Button variant="dark">Redeem</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default KidRewardCard;
