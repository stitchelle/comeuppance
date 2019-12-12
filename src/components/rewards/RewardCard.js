import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class RewardCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-petname">{this.props.reward.name}</span></h3>
          <Button 
          type="button"
          variant="dark" 
          ariant="outline-secondary"  
          onClick={() => this.props.deleteReward(this.props.reward.id)}
          >Delete</Button>
        </div>
      </div>
    );
  }
}

export default RewardCard;