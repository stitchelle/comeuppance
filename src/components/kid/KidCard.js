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
        <br/>
        <strong><h1>Selected Kid:</h1></strong>
        <br/>
        <Card className="text-center">
          <Card.Body>
            <div className="card">
              <div className="card-content">
                <Card.Title className="kidName">{this.state.kid.username} </Card.Title><hr />
                <ButtonGroup className="kidButton">
                  <Button type="button" variant="dark" ariant="outline-secondary" 
                  onClick={() => { 
                    this.props.history.push
                    (`/kid/${this.state.kid.id}/edit`) }}>Edit</Button>
                </ButtonGroup>
                <ButtonGroup className="kidButton">
                  <Button 
                  type="button" 
                  variant="dark" ariant="outline-secondary" 
                  onClick={() => {
                    this.deleteKid(this.state.kid.id)
                    this.props.clearKid()
                    this.props.history.push(`/`)}
                  }
                    
                    >Delete</Button>
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