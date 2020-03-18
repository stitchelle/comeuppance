import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap'

class PunishmentCard extends Component {
    render() {
        return (
            <Card className="text-center">
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text className="card-punishmentpoints">{this.props.punishment.point.numberOfPoints} Points</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="card-punishmentname"><strong>{this.props.punishment.name}</strong></Card.Text>
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
                </Card.Body>
            </Card>
        );
    }
}

export default PunishmentCard;