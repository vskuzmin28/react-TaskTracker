const resetLoginErrMessage = ctx => {
  if (ctx.state.loginErrMessage !== '') {
    ctx.setState({
      loginErrMessage: '',
    })
  }
}

const enteredCredentials = new Map()

const onNameEnter = ctx =>
  (e) => {
    enteredCredentials.set('enteredName', e.target.value)

    resetLoginErrMessage(ctx)
  }

const onPassEnter = ctx =>
  (e) => {
    enteredCredentials.set('enteredPass', e.target.value)

    resetLoginErrMessage(ctx)
  }

const checkCredentials = ctx =>
  (e) => {
    e.preventDefault()

    const isCredentialsCorrect = ctx.state.users.some(({ name, pass }) =>
      (name === enteredCredentials.get('enteredName'))
      && (pass === enteredCredentials.get('enteredPass'))
    )

    if (isCredentialsCorrect) {
      ctx.setState({
        loggedUserName: enteredCredentials.get('enteredName'),
        isLoggedIn: true,
      })
    } else {
      ctx.setState({
        loginErrMessage: 'Неверно ввведен пароль или такого пользователя не существует',
      })
    }
  }

export default {
  onNameEnter,
  onPassEnter,
  checkCredentials,
}
