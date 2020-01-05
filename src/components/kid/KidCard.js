import React, { Component } from 'react';
import { Card, Button, ButtonGroup, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./KidCard.css"
import KidManager from "../../modules/KidManager"


class KidCard extends Component {
  state = {
    kid: ""
  };

  componentDidMount() {
      KidManager.getKid(this.props.match.params.kidId)
      .then((kid) => {
        this.setState({
          kid: kid.user,
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
    return (
      <>
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
      </>
    );
  }
}

export default KidCard;