import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./comeuppance.css"

class Comeuppance extends Component {
    state = {
        user: false
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
    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }
    render() {
        return (
            <>
                <NavBar clearUser = {this.clearUser} user={this.state.user}/>
                <ApplicationViews setUser = {this.setUser} user={this.state.user}/>
            </>
        )
    }
}

export default Comeuppance