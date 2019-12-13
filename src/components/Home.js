import React, { Component } from 'react'

class Home extends Component {
  render() {
    if (sessionStorage.getItem("kidCredentials") !== null) {
      return (
        <center><h1>COMEUPPANCE</h1></center>)
    } else {
      return (
        <>
          <center><h1>COMEUPPANCE</h1></center>
          <center><h5>Please Pick Child in Navigation Dropdown</h5></center>
        </>
      )
    }
  }
}

export default Home