import React from 'react'

const Register = (props) => {
  return (
    <div className="block-registr">
      <div className="container">
        <div className="registr-form">
          <h2>Регистрация нового сотрудника <br/> в UI Task Tracker</h2>
          <form action="/" method="post">
            <input name="" type="text" placeholder="Логин"/>
            <input name="" type="password" placeholder="Пароль"/>
            <input name="" type="text" placeholder="E-mail"/>
            <input name="" type="text" placeholder="ФИО"/>
            <input name="" type="text" placeholder="Должность"/>
            <input name="" type="text" placeholder="Рабочий телефон"/>
            <button className="btn-orange">Регистрация</button>
          </form><img src="../img/logo-white.png" alt="@@"/>
        </div>
      </div>
    </div>
  )
}

export default Register
