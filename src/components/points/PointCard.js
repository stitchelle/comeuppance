import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import PointsHistoryManager from "../../modules/PointsHistoryManager"


class PointCard extends Component {
    state = {
        kidId: "",
        currentMonthsPoints: [],
        previousMonthsPoints: [],
        loadingStatus: false
    };

    isParent = () => {
        let Parent = JSON.parse(sessionStorage.getItem("credentials"))
        console.log("RewardList: Render", Parent.isParent);
        return (
            Parent.isParent
        )
    }

    componentDidMount() {
        let userId = this.isParent() ? Number(sessionStorage.getItem("kidCredentials")) : JSON.parse(sessionStorage.getItem("credentials")).id
        console.log("user".userId)

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
        // PointsHistoryManager.getCurrentForUser(userId)
        //     .then((currentPoints) => {
        //         console.log("filtered", currentPoints)
        //         this.setState({
        //             kidId: userId,
        //             currentMonthsPoints: currentPoints
        //         })
        //     })
    }
    totalPoints = (points) => {
        let total = 0
        points.map(point => {
            total += point.numberOfPoints
        })
        return total
    }

    render() {
        console.log("points", this.state.previousMonthsPoints)
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