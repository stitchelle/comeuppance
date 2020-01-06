import React, { Component } from 'react';
import { Card, InputGroup, Col, Row } from "react-bootstrap"
import "./History.css"

class HistoryCard extends Component {
    historyCard = (comeuppance) => {
        if (comeuppance === 2) {
            return "historyCardNegative"
        } else {
            return "historyCardPositive"
        }
    }

    handleBoxChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
    };
    render() {
        console.log(this.props.history.comeuppance.id)
        return (
            <Card>
                <Card.Body className={this.historyCard(this.props.history.comeuppance.comeuppanceType)}>
                    <Row>
                        {(this.props.history.comeuppance.comeuppanceType === 1) ?
                            <>
                                <Col>
                                    <Card.Text>{this.props.history.point.numberOfPoints} Points</Card.Text>
                                </Col>
                            </> :
                            <Col>
                                <Card.Subtitle> - {this.props.history.point.numberOfPoints} Points</Card.Subtitle>
                            </Col>
                        }
                        <Col>
                            <Card.Title>
                                {this.props.history.comeuppance.name}
                            </Card.Title>
                        </Col>
                        <Col>
                            <Card.Text>
                                Date: {new Date(this.props.history.timestamp).getFullYear()}-
                          {new Date(this.props.history.timestamp).getMonth()+1}-{new Date(this.props.history.timestamp).getDate()}
                            </Card.Text>
                        </Col>
                        <Col>
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox 
                                    aria-label="checkbo"key={(this.props.history.comeuppance.id)}
                                    onChange={this.handleBoxChange}/>
                            </InputGroup.Prepend>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default HistoryCard;
