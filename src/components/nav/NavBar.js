import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/NavBar"
import { Form, Button, Nav, NavDropdown, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"

class NavBar extends Component {
    render() {
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

                        <Nav.Link href="/reward">Reward</Nav.Link>
                        <Nav.Link href="/punishment">Punishment</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
