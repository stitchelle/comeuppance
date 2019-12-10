import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Register from "./auth/Registration";
import Login from "./auth/Login"
import Home from "./Home"
import KidCard from "./kid/KidCard"
import KidForm from './kid/KidForm'



export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={props => {
                    if (this.props.user) {
                        return <Redirect to="/" />
                    } else {
                        return <Login setUser={this.props.setUser} {...props}{...this.props} />
                    }
                }}
                />
                <Route
                    path="/register" render={props => {
                        if (this.props.user) {
                            return <Redirect to="/" />
                        } else {
                            return <Register setUser={this.props.setUser} {...props}{...this.props} />
                        }
                    }}
                />

                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route path="/kid/new" render={(props) => {
                    return <KidForm {...props} />
                }} />

                {/* <Route
                    exact
                    path="/kid"
                    render={props => {
                        if (this.props.user) {
                            return <KidCard />;
                        } else {
                            return <Redirect to="/login" />
                        }
                        // Remove null and return the component which will show news articles
                    }}
                /> */}


                {/* <Route path="/kid/new" render={(props) => {
                    return <KidForm {...props} />
                }} /> */}
            </React.Fragment>
        );
    }
}