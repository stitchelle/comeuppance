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
          <div className="Background"></div>
          <div className="HomeLogoContainer2">
            <center>
              <h1 className="Title">COMEUPPANCE</h1>
              <div className="HomeLogoContainer">
                <img className="KumaLogo" src={Logo} alt="ComeuppanceLogo"></img>
              </div>
            </center>
          </div>
        </>
      )
    } else {
      return (
        <>
          {/* <Card.Header> */}
          <div className="Background"></div>
          <div className="HomeLogoContainer2">
            <center>
              <h1 className="Title">COMEUPPANCE</h1>
            
          {/* </Card.Header> */}
          {/* <Card.Body> */}
          
            <h5>Please Pick Child in Navigation Dropdown</h5>
            <div className="HomeLogoContainer">
              <img className="KumaLogo" src={Logo} alt="ComeuppanceLogo"></img>
            </div>
          </center>
        </div>
          {/* </Card.Body> */ }
        </>
      )
    }
  }
}

export default Home