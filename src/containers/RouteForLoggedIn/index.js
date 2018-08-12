import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const RouteForLoggedIn = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isLoggedIn === true ? (
          <Component {...Object.assign({}, props, rest)} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )}
    />
  )
}

export default RouteForLoggedIn
