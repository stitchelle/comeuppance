import React, { Component } from 'react';
import { Card, Button, ButtonGroup, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./KidCard.css"
import KidManager from "../../modules/KidManager"
import PointHistoryManager from "../../modules/PointsHistoryManager"

class KidCard extends Component {
  state = {
    kid: "",
    pointHistory: []
  };

  componentDidMount() {
    Promise.all([
      KidManager.getKid(this.props.match.params.kidId),
      PointHistoryManager.getAll()


    ])
      .then(([kid, pointHistory]) => {
        this.setState({
          kid: kid.user,
          pointHistory: pointHistory
        })
      })
  }

  deleteKid = id => {
    KidManager.delete(id)
      .then(() => {
        this.props.updateRelationships()
      })
  }

  render() {
    console.log("kuma", this.state.pointHistory)
    return (
      <>
        <br />
        <strong><h3>Kid Info:</h3></strong>
        <CardGroup>
          <Card className="text-center">
            <Card.Header as="h5" className="kidName">{this.state.kid.username}</Card.Header>
            <Card.Body>
              <Card.Title className="kidEmail">Email: {this.state.kid.email}</Card.Title>
              <Card.Text className="kidPassword">
                Password: {this.state.kid.password}
              </Card.Text>
              <ButtonGroup className="kidButton">
                <Button type="button" variant="dark" ariant="outline-secondary"
                  onClick={() => {
                    this.props.history.push
                      (`/kid/${this.state.kid.id}/edit`)
                  }}>Edit</Button>
              </ButtonGroup>
              <ButtonGroup className="kidButton">
                <Button
                  type="button"
                  variant="dark" ariant="outline-secondary"
                  onClick={() => {
                    this.deleteKid(this.state.kid.id)
                    this.props.clearKid()
                    this.props.history.push(`/`)
                  }
                  }
                >Delete</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card className="text-center">
            <Card.Header as="h5" className="kidName">Point History</Card.Header>
            <Card.Body>
              {
                this.state.pointHistory.map(point => {
                  return (
                    <Card key={point.id}>
                      <Card.Body>
                        <Card.Subtitle>
                          {point.numberOfPoints}
                        </Card.Subtitle>
                        <Card.Title>
                          {point.reason}
                        </Card.Title>
                        <Card.Text className="date">
                          {new Date(point.timestamp).getFullYear()}-
                          {new Date(point.timestamp).getMonth()}-{new Date(point.timestamp).getDate()}
                        </Card.Text>
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
  }
}

export default KidCard;