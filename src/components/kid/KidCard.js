import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class KidCard extends Component {
  render() {
    return (
        <>
        <div className="card">
            <div className="card-content">
            <h3>Kid Name: </h3>
                
            <button type="button" onClick={() => {this.props.history.push(`/kids/${this.props.kid.id}/edit`)}}>Edit</button>
            <button type="button" onClick={() => this.props.deleteKid(this.props.kid.id)}>Delete</button>
            </div>
        </div>
        </>
    );
  }
}

export default KidCard;