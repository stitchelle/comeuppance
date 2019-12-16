import React, { Component } from 'react';
import { Form, Col, Row, Tooltip, OverlayTrigger,Card } from 'react-bootstrap'


class PointCard extends Component {

    renderTooltipPositive(props) {
        return <Tooltip {...props}>Add Positive Points</Tooltip>;
    }

    renderTooltipNegative(props) {
        return <Tooltip {...props}>Add Negative Points</Tooltip>;
    }

    render() {
        return (
            <>
            
            <Card className="text-center">
                <Card.Body>
                    <div className="card">
                        <div className="card-content">
                            <Card.Title className="previousMonthsPoints">Previous Month's Points Remaining</Card.Title><hr />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <div className="card">
                        <div className="card-content">
                            <Card.Title className="currentMonthsPoints">Current Month's Points </Card.Title><hr />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            </>
                            );
    }
}

export default PointCard;