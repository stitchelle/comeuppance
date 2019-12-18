import React, { Component } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'

class KidPunishmentCard extends Component {
    render() {
        console.log("this.props.punishments", this.props.punishments)
        console.log("!-----")

        return (
            <>
                <CardGroup>
                    <Card>
                        <Card.Header as="h5">{this.props.point.numberOfPoints} Points</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {
                                    this.props.punishments.map(punishment =>
                                        <Card>
                                            <Card.Body>
                                                <h5>{punishment.name}</h5>
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

export default KidPunishmentCard;
