import React, { Component } from 'react';
import { Form, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import PointHistoryManager from "../../modules/PointsHistoryManager"
import PointCard from "./PointCard"
import KidPointCard from './KidPointCard';


class PointList extends Component {
    state = {
        userId: "",
        numberOfPoints: "",
        reason: "",
        timestamp: "",
        loadingStatus: false,
    };

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
            const pointHistory = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                numberOfPoints: Number(this.state.numberOfPoints),
                reason: this.state.reason,
                timestamp: new Date().toISOString(),
            };

            PointHistoryManager.post(pointHistory)
            // .then(() => this.props.history.push("/pointsHistory"));
        }
    };

    constructNewNegativePointReason = evt => {
        evt.preventDefault();
        if (this.state.numberOfPoints === "" || this.state.reason === "") {
            window.alert("Please input point information");
        } else {
            this.setState({ loadingStatus: true });
            const pointHistory = {
                userId: Number(sessionStorage.getItem("kidCredentials")),
                numberOfPoints: -Number(this.state.numberOfPoints),
                reason: this.state.reason,
                timestamp: new Date().toISOString(),
            };

            PointHistoryManager.post(pointHistory)
            // .then(() => this.props.history.push("/pointsHistory"));
        }
    };


    renderTooltipPositive(props) {
        return <Tooltip {...props}>Add Positive Points</Tooltip>;
    }

    renderTooltipNegative(props) {
        return <Tooltip {...props}>Add Negative Points</Tooltip>;
    }

    isParent = () => {
        if (this.props.user === true) {
            let Parent = JSON.parse(sessionStorage.getItem("credentials"))
            console.log("RewardList: Render", Parent.isParent);
            return (
                Parent.isParent
            )
        }
    }

    render() {
        console.log("lol", "onClick")
        if (this.isParent() !== false) {
            return (
                <>
                    <strong><center><h1>TOTAL POINTS</h1></center></strong>
                    <PointCard />
                    <Form>
                        <fieldset>
                            <center><h2>ADD POINTS</h2></center>
                            <Form.Row>
                                <Col className="alignLeft">

                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={this.renderTooltipPositive}
                                    >
                                        <picture hover="Add Positive Points">
                                            <img src={require('./plus add.png')} alt="add button" height="45em" id="positive" onClick={this.constructNewPositivePointReason} />
                                        </picture>
                                    </OverlayTrigger>
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

                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={this.renderTooltipNegative}>
                                        <picture>
                                            <img src={require('./remove_circle-24px.svg')} alt="add button" height="50em" id="negative" onClick={this.constructNewNegativePointReason} />
                                        </picture>
                                    </OverlayTrigger>
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Group controlId="numberOfPoints">
                                <Form.Control as="select" onChange={this.handleFieldChange}>
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
                    {/* <KidPointCard/> */}
                </>

            );
        } else if (this.isParent() !== true) {
            return (
                <KidPointCard />
            )
        }
    }
}

export default PointList;