import React, { Component } from 'react'
import KidCard from './ChildCard'
import RegistrationLoginManager from '../../modules/RegistrationLoginManager'
import './ChildForm.css'

class KidList extends Component {
  //define what this component needs to render
  state = {
    kids: [],
  }

  componentDidMount() {
    console.log("KID LIST: ComponentDidMount");
    //getAll from ArticleManager and hang on to that data; put it in state
    RegistrationLoginManager.getAll()
      .then((kids) => {
        this.setState({
          kids: kids
        })
      })
  }

  render() {
    console.log("KidsList: Render");

    return (
      <>
        <br/>
        <center><strong></strong><em><h1>Kids</h1></em><strong></strong></center>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {this.props.history.push("/kid/new") }}>
            Add Kid
          </button>
        </section>
        <div className="container-cards">
          {this.state.kid.map(kid =>
            <KidCard
            //   key={kid.id}
            //   kid={kid}
            //   deleteKid={this.deleteKid}
            //   {...this.props}
            />
          )}
        </div>
      </>
        )
  }

//   deleteKid = id => {
//     RegistrationLoginManager.delete(id)
//       .then(() => {
//         RegistrationLoginManager.getAll()
//           .then((newKids) => {
//             this.setState({
//               kids: newKids
//             })
//           })
//       })
//   }
}

export default KidList