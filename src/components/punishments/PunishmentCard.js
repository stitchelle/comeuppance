import React, { Component } from 'react';

class PunishmentCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-petname">{this.props.punishment.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default PunishmentCard;