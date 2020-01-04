import React, { Component } from 'react';
import { Card, Button, ButtonGroup, Col, Row } from 'react-bootstrap'
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
                <Card.Header as="h1" className="text-center">Points</Card.Header>
                <Card className="text-center">
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title className="previousMonthsPoints">Previous Month</Card.Title>
                                <Card.Text>{this.totalPoints(this.state.previousMonthsPoints)}</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title className="currentMonthsPoints">Current Month </Card.Title>
                                <Card.Text>{this.totalPoints(this.state.currentMonthsPoints)}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <ButtonGroup className="redeemButton" >
                    <Button
                        type="button"
                        variant="dark"
                        ariant="outline-secondary"
                        size="lg"
                        onClick={() => {
                            //   this.props.history.push(`/`)
                        }}
                    >Redeem Points</Button>
                </ButtonGroup>
            </>
        );
    }
}

export default KidPointCard;