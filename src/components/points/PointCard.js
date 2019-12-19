import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'


class PointCard extends Component {


    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                <div className="card">
                                    <div className="card-content">
                                        <Card.Title className="previousMonthsPoints">Previous Month</Card.Title><hr />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                <div className="card">
                                    <div className="card-content">
                                        <Card.Title className="currentMonthsPoints">Current Month </Card.Title><hr />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default PointCard;