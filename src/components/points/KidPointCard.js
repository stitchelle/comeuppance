import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'
import PointsHistoryManager from "../../modules/PointsHistoryManager"


class KidPointCard extends Component {
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
                <Card.Header as="h3" className="text-center">TOTAL POINTS</Card.Header>

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
                <Button
                    type="button"
                    variant="dark"
                    size="md"
                    block
                    ariant="outline-secondary"
                    onClick={() => {
                        //   this.props.history.push(`/`)
                    }}
                >Redeem Points</Button>
            </>
        );
    }
}

export default KidPointCard;