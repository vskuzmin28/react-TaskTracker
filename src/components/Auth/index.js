import React from 'react'

const Auth = (props) => {
  return (
    <div className="block-authorization">
      <div className="container">
        <div className="auth-form">
          <h2>Добро пожаловать в UI TASK TRACKER</h2>
          <h3>Введите логин/пароль для просмотра своих задач</h3>
          <form action="/" method="post">
            <input name="" type="text" placeholder="Логин"/>
            <input name="" type="password" placeholder="Пароль"/>
            <button className="btn-orange">Войти</button>
          </form><a href="registration.html" title="">Зарегистрироваться</a><img src="../img/logo-white.png" alt="@@"/>
        </div>
      </div>
    </div>
  )
}

export default Auth
