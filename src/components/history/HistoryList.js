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

    componentDidMount() {
        console.log("HISTORY LIST: ComponentDidMount");
        //getAll from HistoryManager and hang on to that data; put it in state
        HistoryManager.getAll()
            .then((history) => {
                this.setState({
                    history: history
                })
            })
    }

    render() {
        console.log("HISTORY LIST: Render");

        return (
            <Card className="container-cards">
                <Card.Body>
                    {this.state.history.map(history => <HistoryCard key={history.id} history={history} />)}
                </Card.Body>
            </Card>
        )
    }
}

export default HistoryList
