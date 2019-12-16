import React, { Component } from "react"
import RegistrationLoginManager from "../../modules/RegistrationLoginManager"
import { Link } from "react-router-dom"


class Register extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: "",
        loadingStatus: false,
        confirmPassword: "",
        isParent: "",
        pointsId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // the logic to handle registration. This calls functions from Article manager.
    handleRegistration = (e) => {
        e.preventDefault()
        // if statements for validating password
        if (this.state.password === '') {
            alert("Please enter Password");
        }
        // If confirm password not entered 
        else if (this.state.confirmPassword === '') {
            alert("Please enter confirm password");
        }
        // If Not same return False.     
        else if (this.state.password !== this.state.confirmPassword) {
            alert("Password did not match: Please try again...")
            return false;
        } else 
        // posts new user to database if the user does not already exist
        {
            // search for user in database
            RegistrationLoginManager.searchUser(this.state.email)
                .then((existingUser) => {
                    // if user does not exist, then post them to the database as a new user
                    if (existingUser.length === 0) {
                        this.setState({ loadingStatus: true })
                        const userObj = {
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                            isParent: true,
                            pointsId: this.state.pointsId,
                        }
                        // post user to database
                        RegistrationLoginManager.postNewUser(userObj)
                            .then(newUser => {
                                // get user that we just posted
                                RegistrationLoginManager.getRegisteredUser(this.state.email)
                                    .then(users => {
                                        users.forEach(user => {
                                            // call the set user function from nutshell.js to set local storage.
                                            this.props.setUser(user)
                                        });
                                        // then once the local storage is set, then take the user to the articles page
                                        this.props.history.push("/")
                                    })
                            })
                    } else {
                        // if the search user function come back with a user, then alert the user that they already have an account
                        window.alert("User already has an account")
                    }
                }
                )
        }
    }
   

    render() {
        return (
            <>
            <br/>
            <center><h1>WELCOME TO COMEUPPANCE!!!</h1></center>
            <form onSubmit={this.handleRegistration}>
                <fieldset>
                    <h3>Register Account</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                        /* if you are doing an input, and you want the content that the user is putting in the input box to be saved in state, then your ID in you input box has to match the state key. See below for example.
                        State = {
                            key: name
                        } 
                        <input onChange={this.handleFieldChange} type="text"
                            id="key"
                            placeholder="Enter text"
                            required="" autoFocus="" />
                            
                        */
                            id="username"
                            placeholder="User Name"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">User Name</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button type="submit">
                        Register
                    </button>
                    <Link className="nav-link" to="/login">Already Have An Account</Link>
                </fieldset>
            </form>
            </>
        )
    }
}

    export default Register