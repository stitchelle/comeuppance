import React, { Component } from 'react';
import { Card, Button, ButtonGroup, Col, Row } from 'react-bootstrap'


class KidPointCard extends Component {


    render() {
        return (
            <>
            <Card.Header as="h1"className="text-center">Points</Card.Header>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                        <Card.Title className="previousMonthsPoints">Previous Month</Card.Title>  
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                        <Card.Title className="currentMonthsPoints">Current Month </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <ButtonGroup className="redeemButton" >
                    <Button
                        type="button"
                        variant="dark" ariant="outline-secondary"
                        size="lg"
                        onClick={() => {
                            //   this.props.history.push(`/`)
                        }
                        }
                    >Redeem Points</Button>
                </ButtonGroup>
            </>
        );
    }
}

export default KidPointCard;