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
      const {
        name,
        fullName,
        phone,
        email,
      } = ctx.state.users.find(({ name, pass }) =>
        (name === enteredCredentials.get('enteredName'))
        && (pass === enteredCredentials.get('enteredPass'))
      )

      ctx.setState({
        loggedUserName: name,
        loggedFullName: fullName,
        loggedPhone: phone,
        loggedEmail: email,
        isLoggedIn: true,
      })

      enteredCredentials.set('enteredName', '')
      enteredCredentials.set('enteredPass', '')

    } else {
      ctx.setState({
        loginErrMessage: 'Неверно ввведен пароль или такого пользователя не существует',
      })
    }
  }

const onLogoutClick = ctx =>
  (e) => {
    e.preventDefault()

    ctx.setState({
      loggedUserName: '',
      isLoggedIn: false,
      loggedFullName: '',
      loggedPhone: '',
      loggedEmail: '',
    })
  }

export default {
  onNameEnter,
  onPassEnter,
  checkCredentials,
  onLogoutClick,
}
