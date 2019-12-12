import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap'

class PunishmentCard extends Component {
    render() {
        return (
            <Card className="text-center">
                <Card.Body>
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
                </Card.Body>
            </Card>
        );
    }
}

export default PunishmentCard;