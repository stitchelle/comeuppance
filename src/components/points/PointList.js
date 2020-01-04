import React, { Component } from 'react';
import { Form, Col, Card, CardGroup, Row } from 'react-bootstrap'
import PointsHistoryManager from "../../modules/PointsHistoryManager"
import PointCard from "./PointCard"
import KidPointCard from './KidPointCard';
import "./Point.css"


class PointList extends Component {
    state = {
        userId: "",
        numberOfPoints: "",
        reason: "",
        timestamp: "",
        pointsHistory: [],
        loadingStatus: false,
    };
    // for PointsHistory
    componentDidMount() {
        PointsHistoryManager.getAll()
            .then((pointsHistory) => {
                this.setState({
                    pointsHistory: pointsHistory
                })
            })
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewPositivePointReason = evt => {
        evt.preventDefault();
        if (this.state.numberOfPoints === "" || this.state.reason === "") {
            window.alert("Please input point information");
        } else {
            this.setState({ loadingStatus: true });
            const pointsHistory = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                numberOfPoints: Number(this.state.numberOfPoints),
                reason: this.state.reason,
                timestamp: new Date().toISOString(),
            };

            PointsHistoryManager.post(pointsHistory)
            // .then(() => this.props.history.push("/pointsHistory"));
        }
    };

    constructNewNegativePointReason = evt => {
        evt.preventDefault();
        if (this.state.numberOfPoints === "" || this.state.reason === "") {
            window.alert("Please input point information");
        } else {
            this.setState({ loadingStatus: true });
            const pointsHistory = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                numberOfPoints: -Number(this.state.numberOfPoints),
                reason: this.state.reason,
                timestamp: new Date().toISOString(),
            };

            PointsHistoryManager.post(pointsHistory)
            // .then(() => this.props.history.push("/pointsHistory"));
        }
    };

    isParent = () => {
        if (this.props.user === true) {
            let Parent = JSON.parse(sessionStorage.getItem("credentials"))
            console.log("RewardList: Render", Parent.isParent);
            return (
                Parent.isParent
            )
        }
    }

    pointCard = (point) => {
        if (point < 0) {
            return "pointCardNegative"
        } else {
            return "pointCardPositive"
        }
    }

    render() {
        console.log("hi", "onClick")
        if (this.isParent()!== false) {
            return (
                <>
                <CardGroup>
                    <PointCard />
                    <Card.Body>
                    <Form>
                        <fieldset>
                            <center><h2>ADD POINTS</h2></center>
                            <Form.Row>
                                <Col className="alignLeft">
                                    <picture hover="Add Positive Points">
                                        <img src={require('./plus add.png')} alt="add button" height="45em" id="positive" onClick={this.constructNewPositivePointReason} />
                                    </picture>
                                </Col>
                                <Col className="alignCenter">

                                    <Form.Control
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="reason" placeholder="Reason" />
                                    <Form.Text className="text-muted">Enter Reason For Points</Form.Text>
                                </Col>
                                <Col className="alignRight">
                                    <picture>
                                        <img src={require('./remove_circle-24px.svg')} alt="add button" height="50em" id="negative" onClick={this.constructNewNegativePointReason} />
                                    </picture>
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="numberOfPoints">
                                <Form.Control as="select" onChange={this.handleFieldChange}>
                                    <option >Choose Points</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control>
                                <Form.Text className="text-muted">Select Number of Points</Form.Text>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    </Card.Body>
                    </CardGroup>
                    <CardGroup>
                        <Card className="text-center">
                            <Card.Header className="pointHistory"><h3>Point History</h3></Card.Header>
                            <Card.Body>
                                {
                                    this.state.pointsHistory.map(point => {
                                        return (
                                            <Card key={point.id}>
                                                <Card.Body className={this.pointCard(point.numberOfPoints)}>
                                                    <Row>
                                                        <Col>
                                                            <Card.Text>
                                                                {point.numberOfPoints}
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Card.Title>
                                                                {point.reason}
                                                            </Card.Title>
                                                        </Col>
                                                        <Col>
                                                            <Card.Text className="date">
                                                                {new Date(point.timestamp).getFullYear()}
                                                                -{new Date(point.timestamp).getMonth()}
                                                                -{new Date(point.timestamp).getDate()}
                                                            </Card.Text>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        )

                                    }
                                    )

                                }

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </>

            );
        } else {
            return (
                <>
                    <KidPointCard />
                    <CardGroup>
                        <Card className="text-center">
                            <Card.Header as="h5" className="kidName">Point History</Card.Header>
                            <Card.Body>
                                {
                                    this.state.pointsHistory.map(point => {
                                        return (
                                            <Card key={point.id}>
                                                <Card.Body className={this.pointCard(point.numberOfPoints)}>
                                                    <Row>
                                                        <Col>
                                                            <Card.Text>
                                                                {point.numberOfPoints}
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Card.Title>
                                                                {point.reason}
                                                            </Card.Title>
                                                        </Col>
                                                        <Col>
                                                            <Card.Text className="date">
                                                                {new Date(point.timestamp).getFullYear()}
                                                                -{new Date(point.timestamp).getMonth()}
                                                                -{new Date(point.timestamp).getDate()}
                                                            </Card.Text>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        )

                                    }
                                    )

                                }

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </>
            )
        }
    }
}

export default PointList;