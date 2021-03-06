import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
//import the components we will need
import PunishmentCard from './PunishmentCard'
import PunishmentManager from '../../modules/PunishmentManager'
import KidPunishmentList from './KidPunishmentList'
import Helper from '../Helper'

class PunishmentList extends Component {
    //define what this component needs to render
    state = {
        punishments: [],
    }

    componentDidMount() {
        //getAll from PunishmentManager and hang on to that data; put it in state
        PunishmentManager.getAll(sessionStorage.getItem("kidCredentials"))
            .then((punishments) => {
                this.setState({
                    punishments: punishments
                })
            })
    }

    deletePunishment = id => {
        PunishmentManager.delete(id)
            .then(() => {
                PunishmentManager.getAll(sessionStorage.getItem("kidCredentials"))
                    .then((newPunishments) => {
                        this.setState({
                            punishments: newPunishments
                        })
                    })
            })
    }

    render() {
        if (Helper.isParent(sessionStorage) !== false) {
            return (
                <>
                    <Card style={{backgroundColor: "#fce3ed"}}>
                        <Card.Header><center><h1>Punishments</h1></center></Card.Header>
                        <Button type="button"
                            className="btn"
                            variant="dark"
                            size="lg" 
                            block
                            ariant="outline-secondary"
                            onClick={() => { this.props.history.push("/punishments/new") }}>
                            Add Punishment
                        </Button>
                    </Card>
                    <Card>
                        {this.state.punishments.map(punishment =>
                            <PunishmentCard
                                key={punishment.id}
                                punishment={punishment}
                                deletePunishment={this.deletePunishment}
                                {...this.props} />
                        )}
                    </Card>
                </>
            )

        } else {
            return (
                <KidPunishmentList />
            )
        }

    }
}

export default PunishmentList