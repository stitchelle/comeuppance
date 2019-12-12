import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class PunishmentCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-petname">{this.props.punishment.name}</span></h3>
          <Button 
          type="button"
          variant="dark" 
          ariant="outline-secondary"  
          onClick={() => this.props.deletePunishment(this.props.punishment.id)}
          >Delete</Button>

        </div>
      </div>
    );
  }
}

export default PunishmentCard;