import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import PointsHistoryManager from "../../modules/PointsHistoryManager"
import Helper from '../Helper'


class PointCard extends Component {
    state = {
        kidId: "",
        currentMonthsPoints: [],
        previousMonthsPoints: [],
        loadingStatus: false
    };

    componentDidMount() {
        let userId = Helper.isParent(sessionStorage) ? Number(sessionStorage.getItem("kidCredentials")) : JSON.parse(sessionStorage.getItem("credentials")).id

        Promise.all([
            PointsHistoryManager.getCurrentForUser(userId),
            PointsHistoryManager.getPreviousForUser(userId)
        ])
            .then(([currentPoints, previousPoints]) => {
                this.setState({
                    kidId: userId,
                    currentMonthsPoints: currentPoints,
                    previousMonthsPoints: previousPoints
                })
            })
    }
    totalPoints = (points) => {
        let total = 0
        points.map(point => {
            total += point.numberOfPoints
        })
        return total
    }

    render() {
        return (
            <>
                <Card.Header className="text-center"><h3>TOTAL POINTS</h3></Card.Header>
                    <Row>
                        <Col className="text-center">
                            <Card.Body>
                                <Card.Title className="previousMonthsPoints">Previous Month</Card.Title>
                                <Card.Text>{this.totalPoints(this.state.previousMonthsPoints)}</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col className="text-center">
                            <Card.Body>
                                <Card.Title className="currentMonthsPoints">Current Month </Card.Title>
                                <Card.Text>{this.totalPoints(this.state.currentMonthsPoints)}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
            </>
        );
    }
}

export default PointCard;