import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./comeuppance.css"
import KidManager from "../modules/KidManager"

class Comeuppance extends Component {
    state = {
        user: false,
        kidId: "",
        relationships: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    // this function sets session storage upon register or login
    setUser = authObj => {
        sessionStorage.setItem("credentials", JSON.stringify(authObj))
        KidManager.getAllRelationsips()
            .then(relationships => {

                this.setState(
                    {
                        relationships: relationships,
                        user: this.isAuthenticated(),
                    }
                )
            })
    }

    updateRelationships = () => {
        KidManager.getAllRelationsips()
            .then(relationships => {

                this.setState(
                    {
                        relationships: relationships,
                        user: this.isAuthenticated(),
                    }
                )
            })
    }

    // this function clears session storage and directs the user to the register page
    clearUser = () => {
        sessionStorage.removeItem("credentials")
        sessionStorage.removeItem("kidCredentials")
        this.setState({
            user: this.isAuthenticated(),

        });
    }

    clearKid = () => {
        sessionStorage.removeItem("kidCredentials")
        this.setState({
            kidId: ""
        })
    }

    setKidId = (id) => {
        console.log("hi", id)
        sessionStorage.setItem("kidCredentials", JSON.stringify(id))
        this.setState({
            kidId: id
        });
        console.log("this is working", this.state.kidId)
    }

    componentDidMount() {
        KidManager.getAllRelationsips()
            .then(relationships => {
                this.setState(
                    {
                        relationships: relationships,
                        user: this.isAuthenticated(),
                    }
                )
            })
    }
    

    render() {
        console.log("this is working", this.state.kidId)

        return (
            <>
                <NavBar setKidId={this.setKidId} clearUser={this.clearUser} user={this.state.user} relationships={this.state.relationships} />
                <ApplicationViews kidId={this.state.kidId} setUser={this.setUser} updateRelationships={this.updateRelationships} user={this.state.user} clearKid={this.clearKid} />
            </>
        )
    }
}

export default Comeuppance