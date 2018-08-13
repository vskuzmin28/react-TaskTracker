import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import store from './store'
import actions from './actions'

import Auth from './components/Auth'
import Register from './components/Register'

import Index from './containers/Index'
import RouteForLoggedIn from './containers/RouteForLoggedIn'

class App extends Component {
  constructor() {
    super()

    this.state = store
    this.actions = Object.keys(actions)
      .reduce((acc, actionName) => {
        return {
          ...acc,
          [actionName]: actions[actionName](this),
        }
      }, {})
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteForLoggedIn 
            exact 
            path="/"
            onDeleteTaskClick={this.actions.handleTaskDeletion}
            handleViewTypeChange={this.actions.handleViewTypeChange}
            onTaskAddClick={this.actions.onTaskAddClick}
            onTaskAddCloseClick={this.actions.onTaskAddCloseClick}
            handleTaskTitleChange={this.actions.handleTaskTitleChange}
            handleTaskBodyChange={this.actions.handleTaskBodyChange}
            handleTaskStatusChange={this.actions.handleTaskStatusChange}
            handleTaskPriorityChange={this.actions.handleTaskPriorityChange}
            handleTaskSubmit={this.actions.handleTaskSubmit}
        
            onLogoutClick={this.actions.onLogoutClick}

            fullName={this.state.loggedFullName}
            phone={this.state.loggedPhone}
            email={this.state.loggedEmail}

            isAddTaskShown={this.state.isAddTaskShown}
            isLoggedIn={this.state.isLoggedIn}
            headerTitle={this.state.headerTitle}
            viewType={this.state.viewType}
            tasks={this.state.tasks}
            component={Index}
          />
          <Route 
            path="/auth"
            render={renderProps => {
              const props = Object.assign({}, renderProps, {
                onNameEnter: this.actions.onNameEnter,
                onPassEnter: this.actions.onPassEnter,
                checkCredentials: this.actions.checkCredentials,
                errMessage: this.state.loginErrMessage,
                linkToRegister: '/register',
              })

              return this.state.isLoggedIn
                ? <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                  />
                : <Auth {...props} />
            }}
          />
          <Route 
            path="/register"
            render={renderProps => {
              const props = Object.assign({}, renderProps, {
                registerErrMessage: this.state.registerErrMessage,
                onNameChange: this.actions.handleUserLoginChange,
                onPassChange: this.actions.handleUserPassChange,
                onEmailChange: this.actions.handleUserEmailChange,
                onPhoneChange: this.actions.handleUserPhoneChange,
                onFullNameChange: this.actions.handleUserfullNameChange,
                onRegistrationSubmit: this.actions.handleUserRegistrationSubmit,
              })

              return this.state.isLoggedIn
                ? <Redirect
                  to={{ pathname: '/', state: { from: props.location } }}
                />
                : <Register {...props} />
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
