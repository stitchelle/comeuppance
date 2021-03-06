import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Register from "./auth/Registration";
import Login from "./auth/Login";
import Home from "./Home";
import KidForm from "./kid/KidForm";
import KidCard from "./kid/KidCard";
import KidEditForm from "./kid/KidEditForm";
import RewardList from "./rewards/RewardList";
import RewardForm from "./rewards/RewardForm";
import RewardsEditForm from "./rewards/RewardEditForm";
import PunishmentList from "./punishments/PunishmentList";
import PunishmentForm from "./punishments/PunishmentForm";
import PunishmentEditForm from "./punishments/PunishmentEditForm";
import PointList from "./points/PointList"
import HistoryList from "./history/HistoryList"
import Helper from "./Helper"




export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={props => {
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
                    return <KidForm updateRelationships={this.props.updateRelationships}{...props} />
                }} />

                <Route exact path="/kid/:kidId(\d+)" render={(props) => {
                    return <KidCard updateRelationships={this.props.updateRelationships} clearKid={this.clearKid} {...props} {...this.props} />
                }} />

                <Route
                    path="/kid/:kidId(\d+)/edit" render={props => {
                        return <KidEditForm updateRelationships={this.props.updateRelationships}{...props} />
                    }}
                />

                <Route exact path="/rewards" render={(props) => {
                    let kid = sessionStorage.getItem("kidCredentials")
                    if (kid !== null || Helper.isParent(sessionStorage) !== true) {
                        return <RewardList kidId={this.props.kidId} {...props} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

                <Route path="/rewards/new" render={(props) => {
                    return <RewardForm kidId={this.props.kidId} {...props} />
                }} />

                <Route
                    path="/rewards/:rewardId(\d+)/edit" render={props => {
                        return <RewardsEditForm kidId={this.props.kidId} {...props} />
                    }}
                />

                <Route exact path="/punishments" render={(props) => {
                    if (sessionStorage.getItem("kidCredentials") !== null || Helper.isParent(sessionStorage) !== true) {
                        return <PunishmentList kidId={this.props.kidId} {...props} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

                <Route path="/punishments/new" render={(props) => {
                    return <PunishmentForm kidId={this.props.kidId} {...props} />
                }} />

                <Route
                    path="/punishments/:punishmentId(\d+)/edit" render={props => {
                        return <PunishmentEditForm kidId={this.props.kidId} {...props} />
                    }}
                />

                <Route path="/points" render={(props) => {
                    if (sessionStorage.getItem("kidCredentials") !== null || Helper.isParent(sessionStorage) !== true) {
                        return <PointList {...props} {...this.props}/>
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

                <Route path="/history" render={(props) => {
                    if (sessionStorage.getItem("kidCredentials") !== null || Helper.isParent(sessionStorage) !== true){
                        return <HistoryList {...props} {...this.props}/>
                    }else {
                        return <Redirect to="/" />
                    }
                        
                }} />

            </React.Fragment>
        );
    }
}