import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Auth from './components/Auth'
import Register from './components/Register'
import Index from './components/Index'

import WithLoggedIn from './HoC/WithLoggedIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <WithLoggedIn 
            exact 
            path="/"
            isLoggedIn={this.state.isLoggedIn}
            component={Index}
          />
          <Route path="/auth" component={Auth} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
