import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/NavBar"
import { Form, Button, Nav, NavDropdown, FormControl } from "react-bootstrap"
// import { Link } from "react-router-dom"
import KidManager from "../../modules/KidManager"




class NavBar extends Component {
    state = {
        relationships: []
    };

    componentDidMount() {
        const user = localStorage.getItem("credentials")
        console.log(user)
        if (user !== null) {
            KidManager.getAllRelationsips()
                .then(relationships => {
                    console.log(relationships)
                    this.setState({ relationships: relationships }
                    )
                })
        }
    }

    render() {
        if (this.props.user === true) {
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
                            <Nav.Link href="/reward">Reward</Nav.Link>
                            <Nav.Link href="/punishment">Punishment</Nav.Link>
                            <NavDropdown title="Kid" id="basic-nav-dropdown">

                                {this.state.relationships.map(kid =>
                                    <NavDropdown.Item href={`/kid/${kid.id}`} key={kid.id}>
                                        {kid.user.username} </NavDropdown.Item >
                                )}

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/kid/new">New Kid</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-link logout" href="/login" onClick={this.props.clearUser}>Logout</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar >
            )
        } else {
            return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/home">
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

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar >
            )
        }
    }
}



export default NavBar
