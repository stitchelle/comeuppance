import React, { Component } from 'react'
//import the components we will need
import {Card} from 'react-bootstrap'
import KidPunishmentCard from './KidPunishmentCard'
import PointManager from '../../modules/PointManager'
import PunishmentManager from "../../modules/PunishmentManager"

class KidPunishmentList extends Component {
    //define what this component needs to render
    state = {
        points: [],
        punishments: []
    }

    componentDidMount() {
        //getAll from PointManager and hang on to that data; put it in state
        // Parse all the getAllByPoints
        let credentials =
            JSON.parse(sessionStorage.getItem("credentials"))

        Promise.all([
            PointManager.getAll(),
            PunishmentManager.getAllByPoints(credentials.id, 1),
            PunishmentManager.getAllByPoints(credentials.id, 2),
            PunishmentManager.getAllByPoints(credentials.id, 3),
            PunishmentManager.getAllByPoints(credentials.id, 4)
        ])
            .then(([points, punishments1, punishments2, punishments3, punishments4]) => {

                this.setState({
                    points: points,
                    punishments: [punishments1, punishments2, punishments3, punishments4]
                })
            })
    }

    render() {
        return (
            <>
               <Card style={{backgroundColor: "#fce3ed"}}>
                    <Card.Header><center><h3>Punishments</h3></center></Card.Header>
                    {
                        this.state.points.map((point, index) => <KidPunishmentCard key={point.id} point={point} punishments={this.state.punishments[index]} />
                        )
                    }
                </Card>
            </>

        )
    }
}

export default KidPunishmentList