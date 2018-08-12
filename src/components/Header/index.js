import React from 'react'

const Header = (props) => (
  <header>
    <div className="container">
      <h1 className="title-page">
        {props.headerTitle}
      </h1>
    </div>
  </header>
)

export default Header
