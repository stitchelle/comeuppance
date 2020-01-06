import React, { Component } from 'react'
import { Card } from "react-bootstrap"
//import the components we will need
import HistoryCard from './HistoryCard'
import HistoryManager from '../../modules/HistoryManager'
import Helper from "../Helper"

class HistoryList extends Component {
    //define what this component needs to render
    state = {
        history: [],
    }

    credentials =
        JSON.parse(sessionStorage.getItem("credentials"))

    kidCredentials = () => {
        if (Helper.isParent(sessionStorage)) {
            return (sessionStorage.getItem("kidCredentials"))
        } else {
            return (this.credentials.id)
        }
    }

    componentDidMount() {
        console.log("HISTORY LIST: ComponentDidMount", this.kidCredentials());
        //getAll from HistoryManager and hang on to that data; put it in state
        HistoryManager.getAll(this.kidCredentials())
            .then((history) => {
                this.setState({
                    history: history
                })
            })
    }

    render() {
        console.log("HISTORY LIST: Render", this.state.history);

        return (
            <>
                <Card className="container-cards">
                    <Card.Header><center><h1>History</h1><h5>Rewards & Punishments</h5></center></Card.Header>
                    <Card.Body>
                        {this.state.history.map(history => <HistoryCard key={history.id} history={history} />)}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HistoryList
