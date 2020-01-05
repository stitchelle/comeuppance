import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Home extends Component {
  isParent = () => {
    let Parent = JSON.parse(sessionStorage.getItem("credentials"))
    return (
      Parent.isParent
    )
  }
  render() {
    if (sessionStorage.getItem("kidCredentials") !== null || this.isParent() !== true) {
      return (
        <Card.Header>
          <center><h1>COMEUPPANCE</h1></center>
        </Card.Header>
      )
    } else {
      return (
        <>
          <Card.Header>
          <center><h1>COMEUPPANCE</h1></center>
          </Card.Header>
          <Card.Body>
          <center><h5>Please Pick Child in Navigation Dropdown</h5></center>
          </Card.Body>
        </>
      )
    }
  }
}

export default Home