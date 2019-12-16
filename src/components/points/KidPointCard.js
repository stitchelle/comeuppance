import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap'


class KidPointCard extends Component {


    render() {
        return (
            <>

                <Card className="text-center">
                    <Card.Body>
                        <div className="card">
                            <div className="card-content">
                                <Card.Title className="previousMonths">Previous Month's Points Remaining</Card.Title><hr />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <div className="card">
                            <div className="card-content">
                                <Card.Title className="currentMonths">Current Month's Points </Card.Title><hr />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <ButtonGroup className="redeemButton" >
                    <Button 
                        type="button"
                        variant="dark" ariant="outline-secondary"
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