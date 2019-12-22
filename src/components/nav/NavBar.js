import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/NavBar"
import { Nav, NavDropdown } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import KidManager from "../../modules/KidManager"




class NavBar extends Component {
    state = {
        userId: ""
    };

    setUserId(kid) {
        this.setState({ userId: kid })
        console.log("setUser", this.state.userId)
    }

    isParent = () => {
        if (this.props.user === true) {
            let Parent = JSON.parse(sessionStorage.getItem("credentials"))
            return (
                Parent.isParent
            )
        }
    }   

    render() {
        console.log("hi",this.state.userId)

        if (this.props.user !== true && this.isParent() === undefined) {
            return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={require('./kuma2.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        COMEUPPANCE
                     </Navbar.Brand>
                </Navbar >
            )
        } else if (this.props.user === true && this.isParent() !== false) {
            return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={require('./kuma2.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        COMEUPPANCE
                            </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"></Nav.Link>
                            <NavDropdown.Divider />

                            <Nav.Link href="/rewards">Reward</Nav.Link>
                            <Nav.Link href="/punishments">Punishment</Nav.Link>
                            <Nav.Link href="/points">Points</Nav.Link>
                            <Nav.Link href="/history">
                                History
                            </Nav.Link>
                            <NavDropdown title="Kid" id="basic-nav-dropdown">

                                {this.props.relationships.length !== 0 && this.props.relationships.map(kid =>
                                    <NavDropdown.Item onClick={() => {
                                        this.props.setKidId(kid.user.id)
                                    }} href={`/kid/${kid.id}`} key={kid.id}>
                                        {kid.user.username} </NavDropdown.Item >
                                )}

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/kid/new">New Kid</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />

                            <Nav.Link className="nav-link logout" href="/login" onClick={this.props.clearUser}>Logout</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar >
            )
        } else if (this.isParent() !== true) {
            return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={require('./kuma2.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        COMEUPPANCE
                            </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown.Divider />

                            <Nav.Link href="/rewards">
                                Reward
                            </Nav.Link>
                            <Nav.Link href="/punishments">
                                Punishment
                            </Nav.Link>
                            <Nav.Link href="/points">
                                Points
                            </Nav.Link>
                            <Nav.Link href="/history">
                                History
                            </Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link className="nav-link logout" href="/login" onClick={this.props.clearUser}>
                                Logout
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar >
            )
        }
    }
}



export default NavBar
