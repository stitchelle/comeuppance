import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
//import the components we will need
import PunishmentCard from './PunishmentCard'
import PunishmentManager from '../../modules/PunishmentManager'

class PunishmentList extends Component {
    //define what this component needs to render
    state = {
        punishments: [],
    }

    componentDidMount() {
        console.log("PUNISHMENT LIST: ComponentDidMount");
        //getAll from PunishmentManager and hang on to that data; put it in state
        PunishmentManager.getAll()
            .then((punishments) => {
                this.setState({
                    punishments: punishments
                })
            })
    }

    deletePunishment = id => {
        PunishmentManager.delete(id)
            .then(() => {
                PunishmentManager.getAll()
                    .then((newPunishments) => {
                        this.setState({
                            punishments: newPunishments
                        })
                    })
            })
    }

    pickRandomPunishment = () => {
        let randomValue = this.state.punishments[Math.floor(Math.random() * this.state.punishments.length)];
        alert(`YOU GOT: ${randomValue.name}`)
    }

    render() {
        console.log("PunishmentList: Render");

        return (
            <>
                <br />
                <section className="section-content">
                    <Button type="button"
                        className="btn"
                        variant="dark" ariant="outline-secondary"
                        onClick={() => { this.props.history.push("/punishments/new") }}>
                        Add Punishment
                    </Button>
                </section>
                <br />
                <div className="container-cards">
                    {this.state.punishments.map(punishment =>
                        <PunishmentCard
                            key={punishment.id}
                            punishment={punishment}
                            deletePunishment={this.deletePunishment}
                            {...this.props} />
                    )}
                </div>
                <br />
                <section className="section-content">
                    <Button type="button"
                        className="btn"
                        variant="dark" ariant="outline-secondary"
                        onClick={() => { this.pickRandomPunishment() }}
                    >
                        Pick Random Punishment
                    </Button>
                </section>
                <br />
            </>
        )
    }
}

export default PunishmentList