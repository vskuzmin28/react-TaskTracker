import React from 'react'

const Auth = (props) => {
  console.log(props)
  return (
    <div className="block-authorization">
      <div className="container">
        <div className="auth-form">
          <h2>Добро пожаловать в UI TASK TRACKER</h2>
          <h3>Введите логин/пароль для просмотра своих задач</h3>
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
          </form><a href="registration.html" title="">Зарегистрироваться</a><img src="../img/logo-white.png" alt="@@"/>
        </div>
      </div>
    </div>
  )
}

export default Auth
