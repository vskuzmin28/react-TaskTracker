import React from 'react'

const Register = (props) => {
  /* registerErrMessage */
  return (
    <div className="block-registr">
      <div className="container">
        <div className="registr-form">
          <h2>Регистрация нового сотрудника <br/> в UI Task Tracker</h2>
          <form onSubmit={props.onRegistrationSubmit} method="post">
            <input 
              name="" 
              type="text" 
              placeholder="Логин"
              onChange={props.onNameChange}
            />
            <input 
              name="" 
              type="password" 
              placeholder="Пароль"
              onChange={props.onPassChange}
            />
            <input 
              name="" 
              type="text" 
              placeholder="E-mail"
              onChange={props.onEmailChange}
            />
            <input 
              name="" 
              type="text" 
              placeholder="ФИО"
              onChange={props.onFullNameChange}
            />
            <input 
              name="" 
              type="text" 
              placeholder="Должность"
              onChange={() => {}}
            />
            <input 
              name="" 
              type="text" 
              placeholder="Рабочий телефон"
              onChange={props.onPhoneChange}
            />
            <button className="btn-orange">Регистрация</button>
          </form><img src="../img/logo-white.png" alt="@@"/>
        </div>
      </div>
    </div>
  )
}

export default Register
