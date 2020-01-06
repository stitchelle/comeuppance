import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Helper from './Helper'
import Logo from './nav/kuma2.png'
import "../components/Home.css"

class Home extends Component {
  render() {
    if (sessionStorage.getItem("kidCredentials") !== null || Helper.isParent(sessionStorage) !== true) {
      return (
        <>
          <Card.Header>
            <center>
              <h1>COMEUPPANCE</h1>
            </center>
          </Card.Header>
          <Card.Body>
            <div className="HomeLogoContainer">
              <img className="KumaLogo" src={Logo}></img>
            </div>
          </Card.Body>
        </>
      )
    } else {
      return (
        <>
          <Card.Header>
            <center><h1>COMEUPPANCE</h1></center>
          </Card.Header>
          <Card.Body>
            <center>
              <h5>Please Pick Child in Navigation Dropdown</h5>
              <div className="HomeLogoContainer">
                <img className="KumaLogo" src={Logo}></img>
              </div>
            </center>
          </Card.Body>
        </>
      )
    }
  }
}

export default Home