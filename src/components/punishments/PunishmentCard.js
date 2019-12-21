import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap'

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
                                <Col>
                                    <Card.Text className="card-punishmentpoints">{this.props.punishment.point.numberOfPoints} Points</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Title className="card-punishmentname">{this.props.punishment.name}</Card.Title>
                                </Col>


                                <Button type="button"
                                    variant="dark" ariant="outline-secondary"
                                    size="sm"
                                    onClick={() => { this.props.history.push(`/punishments/${this.props.punishment.id}/edit`) }}>Edit
                            </Button>
                                <Button
                                    type="button"
                                    variant="dark"
                                    ariant="outline-secondary"
                                    size="sm"
                                    onClick={() => this.props.deletePunishment(this.props.punishment.id)}
                                >Delete</Button>
                            </Row>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default PunishmentCard;