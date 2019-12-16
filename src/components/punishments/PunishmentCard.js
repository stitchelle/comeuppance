import React, { Component } from 'react';
import { Button, Card, Row } from 'react-bootstrap'

class PunishmentCard extends Component {
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
                                <Card.Subtitle className="card-punishmentpoints">Points:{this.props.punishment.pointsId}</Card.Subtitle>
                                <Card.Title className="card-punishmentname">{this.props.punishment.name}</Card.Title>

                            </Row>
                            <Button type="button"
                                variant="dark" ariant="outline-secondary"
                                onClick={() => { this.props.history.push(`/punishments/${this.props.punishment.id}/edit`) }}>Edit
                            </Button>
                            <Button
                                type="button"
                                variant="dark"
                                ariant="outline-secondary"
                                onClick={() => this.props.deletePunishment(this.props.punishment.id)}
                            >Delete</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default PunishmentCard;