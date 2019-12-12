import React, { Component } from 'react'
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

    render(){
        console.log("PunishmentList: Render");
      
        return(
          <div className="container-cards">
            {this.state.punishments.map(punishment =>
              <PunishmentCard key={punishment.id} punishment={punishment} />
            )}
          </div>
        )
      }
}

export default PunishmentList