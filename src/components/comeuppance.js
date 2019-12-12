import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./comeuppance.css"

class Comeuppance extends Component {
    state = {
        user: false,
        kidId: ""
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    // this function sets session storage upon register or login
    setUser = authObj => {
        sessionStorage.setItem("credentials", JSON.stringify(authObj))
        this.setState({
            user: this.isAuthenticated(),
        })
    }

    // this function clears session storage and directs the user to the register page
    clearUser = () => {
        sessionStorage.removeItem("credentials")
        this.setState({
            user: this.isAuthenticated()
        });
    }

    setKidId = (id) => {
        console.log("hi",id)
        sessionStorage.setItem("kidCredentials", JSON.stringify(id))
        this.setState({
            kidId: id
        });
        console.log("this is working",this.state.kidId)
    }

    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }
    render() {
        console.log("this is working",this.state.kidId)

        return (
            <>
                <NavBar setKidId={this.setKidId} clearUser = {this.clearUser} user={this.state.user}/>
                <ApplicationViews kidId={this.state.kidId} setUser = {this.setUser} user={this.state.user}/>
            </>
        )
    }
}

export default Comeuppance