import React, { Component } from 'react';
import { Form, Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap'
import PointCard from "./PointCard"


class PointList extends Component {

    renderTooltipPositive(props) {
        return <Tooltip {...props}>Add Positive Points</Tooltip>;
    }

    renderTooltipNegative(props) {
        return <Tooltip {...props}>Add Negative Points</Tooltip>;
    }

    render() {
        return (
            <>
                <strong><center><h1>TOTAL POINTS</h1></center></strong>
                <PointCard />
                <Form>
                    <fieldset>
                        <center><h2>ADD POINTS</h2></center>
                        <Form.Row middle="xs sm md lg xl">
                            <Col className="alignLeft">

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={this.renderTooltipPositive}
                                >
                                    <picture hover="Add Positive Points">
                                        <img src={require('./plus add.png')} alt="add button" height="45em" />
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
                                    overlay={this.renderTooltipNegative}
                                >
                                    <picture>
                                        <img src={require('./remove_circle-24px.svg')} alt="add button" height="50em" />
                                    </picture>
                                </OverlayTrigger>
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Group controlId="selectNumberOfPoints">
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <Form.Text className="text-muted">Select Number of Points</Form.Text>
                        </Form.Group>
                    </fieldset>
                </Form>
            </>
        );
    }
}

export default PointList;