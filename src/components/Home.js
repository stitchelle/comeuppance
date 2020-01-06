import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Helper from './Helper'

class Home extends Component {
  render() {
    if (sessionStorage.getItem("kidCredentials") !== null || Helper.isParent(sessionStorage) !== true) {
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