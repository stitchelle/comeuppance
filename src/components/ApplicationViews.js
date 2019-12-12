import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Register from "./auth/Registration";
import Login from "./auth/Login";
import Home from "./Home";
import KidForm from './kid/KidForm';
import KidCard from "./kid/KidCard";
import KidEditForm from "./kid/KidEditForm";
import RewardList from "./rewards/RewardList";
import RewardForm from './rewards/RewardForm'
import PunishmentList from "./punishments/PunishmentList";
import PunishmentForm from './punishments/PunishmentForm'




export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={props => {
                    console.log(this.props.user)
                    if (this.props.user === true) {
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
                    if (this.props.user) {
                        return <Home />
                    } else {
                        return <Redirect to="/Login" />
                    }
                }} />

                <Route exact path="/kid/new" render={(props) => {
                    return <KidForm {...props} />
                }} />

                <Route exact path="/kid/:kidId(\d+)" render={(props) => {
                    return <KidCard {...props} {...this.props} />
                }} />

                <Route
                    path="/kid/:kidId(\d+)/edit" render={props => {
                        return <KidEditForm {...props} />
                    }}
                />

                <Route exact path="/rewards" render={(props) => {
                    return <RewardList {...props}/>
                }} />

                <Route path="/rewards/new" render={(props) => {
                    return <RewardForm {...props} />
                }} />

                <Route exact path="/punishments" render={(props) => {
                    return <PunishmentList {...props}/>
                }} />

                <Route path="/punishments/new" render={(props) => {
                    return <PunishmentForm {...props} />
                }} />

            </React.Fragment>
        );
    }
}