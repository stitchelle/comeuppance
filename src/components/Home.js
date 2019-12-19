import React, { Component } from 'react'

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