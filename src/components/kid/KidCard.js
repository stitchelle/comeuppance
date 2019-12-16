import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./KidCard.css"
import KidManager from "../../modules/KidManager"

class KidCard extends Component {
  state = {
    kid: ""
  };

  componentDidMount() {

    KidManager.getKid(this.props.match.params.kidId)
      .then(kid =>
        this.setState({ kid: kid.user }))
  }

  deleteKid = id => {
    KidManager.delete(id)
      .then(() => {
        this.props.updateRelationships()
        // KidManager.getAll()
        // .then((newKids) => {
        //   this.setState({
        //       kids: newKids
        //   })
        // })
      })
  }

  render() {
    console.log(this.state.kid)
    return (
      <>
        <br />
        <strong><h3>Kid Info:</h3></strong>
        <Card className="text-center">
          <Card.Header as="h5" className="kidName">{this.state.kid.username}</Card.Header>
          <Card.Body>
            <Card.Title className="kidEmail">{this.state.kid.email}</Card.Title>
            <Card.Text className="kidPassword">
              {this.state.kid.password}
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
      </>
    );
  }
}

export default KidCard;