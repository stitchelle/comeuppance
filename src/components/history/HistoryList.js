import React, { Component } from 'react'
import { Card } from "react-bootstrap"
//import the components we will need
import HistoryCard from './HistoryCard'
import HistoryManager from '../../modules/HistoryManager'

class HistoryList extends Component {
    //define what this component needs to render
    state = {
        history: [],
    }

    isParent = () => {
        let Parent = JSON.parse(sessionStorage.getItem("credentials"))
        console.log("RewardList: Render", Parent.isParent);
        return (
            Parent.isParent
        )
    }

    credentials =
        JSON.parse(sessionStorage.getItem("credentials"))

    kidCredentials = () => {
        if (this.isParent() !== false) {
            return (sessionStorage.getItem("kidCredentials"))
        } else if (this.isParent() !== true) {
            return (this.credentials.id)
        }
        console.log("HIHIHIHIIHIHH", this.credentials)
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
                <center><strong><h1>Reward & Punishment <br/> History</h1></strong></center>
                <Card className="container-cards">
                    <Card.Body>
                        {this.state.history.map(history => <HistoryCard key={history.id} history={history} />)}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HistoryList
