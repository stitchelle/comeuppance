import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./KidCard.css"

class KidCard extends Component {
  render() {
    return (
      <>
        <Card className="text-center">
          <Card.Body>
            <div className="card">
              <div className="card-content">
                <Card.Title className="kidName">Kid Name: </Card.Title><hr />
                <ButtonGroup className="kidButton">
                  <Button type="button" variant="dark" ariant="outline-secondary" onClick={() => { this.props.history.push(`/kids/${this.props.kid.id}/edit`) }}>Edit</Button>
                </ButtonGroup>
                <ButtonGroup className="kidButton">
                  <Button type="button" variant="dark" ariant="outline-secondary" onClick={() => this.props.deleteKid(this.props.kid.id)}>Delete</Button>
                </ButtonGroup>

              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default KidCard;