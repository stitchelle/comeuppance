import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./comeuppance.css"
import KidCard from "./kid/KidCard"

class Comeuppance extends Component {
    state = {
        user: false
    }

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    // this function sets local storage upon register or login
    setUser = authObj => {
        localStorage.setItem("credentials", JSON.stringify(authObj))
        this.setState({
            user: this.isAuthenticated(),
        })
    }

    // this function clears local storage and directs the user to the register page
    clearUser = () => {
        localStorage.removeItem("credentials")
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