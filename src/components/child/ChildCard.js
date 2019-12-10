import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { NavDropdown} from "react-bootstrap"

class KidCard extends Component {
  render() {
    return (
        <>
        <div className="card">
            <div className="card-content">
            <h3>Pick Kid: </h3>
                <NavDropdown title="Pick Kid" id="kid-dropdown">
                                <NavDropdown.Item href="/kid1">Kid 1</NavDropdown.Item>
                                <NavDropdown.Item href="/">Kid 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
            {/* <button type="button" onClick={() => {this.props.history.push(`/articles/${this.props.article.id}/edit`)}}>Edit</button>
            <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)}>Delete</button> */}
            </div>
        </div>
        </>
    );
  }
}

export default KidCard;