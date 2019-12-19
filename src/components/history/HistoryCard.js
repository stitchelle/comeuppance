import React, { Component } from 'react';
import { Card } from "react-bootstrap"

class HistoryCard extends Component {
    render() {
        console.log(this.props.history)
        return (
            <Card>
                <Card.Body>
                    <Card.Subtitle>
                        hi{this.props.history.point.numberOfPoints}
                    </Card.Subtitle>
                    <Card.Title>
                        {this.props.history.comeuppance.name}
                    </Card.Title>
                    <Card.Text>
                        {/* {new Date(this.props.history.timestamp).getFullYear()}-
                          {new Date(this.props.history.timestamp).getMonth()}-{new Date(this.props.history.timestamp).getDate()} */}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HistoryCard;
