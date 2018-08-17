import React from 'react'
import { Link } from 'react-router-dom'

const Auth = (props) => {
  return (
    <div className="block-authorization">
      <div className="container">
        <div className="auth-form">
          <h2>Добро пожаловать в UI TASK TRACKER</h2>
          <h3>Введите логин/пароль для просмотра своих задач</h3>
          {props.errMessage && <p className="auth-form__error">
            {props.errMessage}
          </p>}
          <form method="POST" onSubmit={props.checkCredentials}>
            <input 
              id="login" 
              name="login" 
              type="text" 
              placeholder="Логин"
              onChange={props.onNameEnter}
            />
            <input 
              id="pass" 
              name="pass" 
              type="password" 
              placeholder="Пароль"
              onChange={props.onPassEnter}
            />
            <button className="btn-orange" type="submit">Войти</button>
          </form>
          <Link to={props.linkToRegister}>
            Зарегистрироваться
          </Link>
          <img src="../img/logo-white.png" alt="@@" />
          
        </div>
      </div>
    </div>
  )
}

export default Auth
