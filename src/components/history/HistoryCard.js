import React, { Component } from 'react';
import { Card, InputGroup, Col, Row } from "react-bootstrap"
import "./History.css"
import HistoryManager from '../../modules/HistoryManager'

class HistoryCard extends Component {
    historyCard = (comeuppance) => {
        if (comeuppance === 2) {
            return "historyCardNegative"
        } else {
            return "historyCardPositive"
        }
    }

    handleBoxChange = evt => {
        const editedCheckBox = {
            userId: this.props.historyCard.userId,
            pointId: this.props.historyCard.pointId,
            comeuppanceId: this.props.historyCard.id,
            completed: evt.target.checked,
            timestamp: this.props.historyCard.timestamp
        };
        HistoryManager.update(editedCheckBox,this.props.historyCard.id)
            .then(() => this.props.history.push("/history"))
    
    };
    render() {
        return (
            <Card>
                <Card.Body className={this.historyCard(this.props.historyCard.comeuppance.comeuppanceType)}>
                    <Row>
                        {(this.props.historyCard.comeuppance.comeuppanceType === 1) ?
                            <>
                                <Col>
                                    <Card.Text>{this.props.historyCard.point.numberOfPoints} Points</Card.Text>
                                </Col>
                            </> :
                            <Col>
                                <Card.Subtitle> - {this.props.historyCard.point.numberOfPoints} Points</Card.Subtitle>
                            </Col>
                        }
                        <Col>
                            <Card.Title>
                                {this.props.historyCard.comeuppance.name}
                            </Card.Title>
                        </Col>
                        <Col>
                            <Card.Text>
                                Date: {new Date(this.props.historyCard.timestamp).getFullYear()}-
                          {new Date(this.props.historyCard.timestamp).getMonth()+1}-{new Date(this.props.historyCard.timestamp).getDate()}
                            </Card.Text>
                        </Col>
                        <Col>
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox 
                                    aria-label="checkbox"id={(this.props.historyCard.id)} key={(this.props.historyCard.id)}
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
