import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Auth from './components/Auth'
import Register from './components/Register'
import Index from './components/Index'

import RouteForLoggedIn from './HoC/RouteForLoggedIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [{
        name: 'test',
        pass: '123',
      }],
      loggedUserName: '',
      isLoggedIn: false,
    }

    this.enteredName = ''
    this.enteredPass = ''
  }

  onNameEnter = (e) => {
    this.enteredName = e.target.value
  }

  onPassEnter = (e) => {
    this.enteredPass = e.target.value
  }

  checkCredentials = (e) => {
    e.preventDefault()

    const isCredentialsCorrect = this.state.users.some(({name, pass}) => 
      (name === this.enteredName) && (pass === this.enteredPass)
    )

    if (isCredentialsCorrect) {
      this.setState({
        loggedUserName: this.enteredName,
        isLoggedIn: true,
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteForLoggedIn 
            exact 
            path="/"
            isLoggedIn={this.state.isLoggedIn}
            component={Index}
          />
          <Route 
            path="/auth"
            render={renderProps => {
              const props = Object.assign({}, renderProps, {
                onNameEnter: this.onNameEnter,
                onPassEnter: this.onPassEnter,
                checkCredentials: this.checkCredentials,
              })

              return this.state.isLoggedIn
                ? <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                  />
                : <Auth {...props} />
            }}
          />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
