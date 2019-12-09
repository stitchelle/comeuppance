import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Register from "./auth/Registration";
import Login from "./auth/Login"

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
        </React.Fragment>
    );
  }
}