const newUserData = new Map()

const clearUserData = () => {
  newUserData.forEach((_, k) => newUserData.set(k, ''))
}

const errMessageCleanup = (ctx) => {
  const { registerErrMessage } = ctx.state

  if (registerErrMessage) {
    ctx.setState({
      registerErrMessage: false,
    })
  }

}

const handleUserLoginChange = ctx =>
  (e) => {
    newUserData.set('userName', e.target.value)
    errMessageCleanup(ctx)
  }

const handleUserPassChange = ctx =>
  (e) => {
    newUserData.set('userPass', e.target.value)
    errMessageCleanup(ctx)
  }

const handleUserEmailChange = ctx =>
  (e) => {
    newUserData.set('userEmail', e.target.value)
    errMessageCleanup(ctx)
  }

const handleUserPhoneChange = ctx =>
  (e) => {
    newUserData.set('userPhone', e.target.value)
    errMessageCleanup(ctx)
  }

const handleUserfullNameChange = ctx =>
  (e) => {
    newUserData.set('userFullname', e.target.value)
    errMessageCleanup(ctx)
  }

const handleUserRegistrationSubmit = ctx =>
  (e) => {
    e.preventDefault()

    const { users } = ctx.state

    if (users.find(({ name }) => name === newUserData.get('userName'))) {
      return ctx.setState({
        registerErrMessage: 'такой логин уже занят',
      })
    }

    if (newUserData.get('userName').length < 3) {
      return ctx.setState({
        registerErrMessage: 'слишком короткое имя',
      })
    }

    if (newUserData.get('userPass').length < 3) {
      return ctx.setState({
        registerErrMessage: 'слишком короткий пароль',
      })
    }

    /* if (newUserData.get('userEmail').length < 3) {
      return ctx.setState({
        registerErrMessage: 'слишком короткий пароль',
      })
    } */

    /* if (newUserData.get('userPass').length < 3) {
      return ctx.setState({
        registerErrMessage: 'слишком короткий пароль',
      })
    } */

    /* if (newUserData.get('userPass').length < 3) {
      return ctx.setState({
        registerErrMessage: 'слишком короткий пароль',
      })
    } */

    const newUser = {
      "name": newUserData.get('userName'),
      "pass": newUserData.get('userPass'),
      "fullName": newUserData.get('userFullname'),
      "phone": newUserData.get('userPhone'),
      "email": newUserData.get('userEmail'),
    }

    clearUserData()
    errMessageCleanup(ctx)

    ctx.setState({
      users: [newUser, ...users],
      loggedUserName: newUser.name,
      loggedFullName: newUser.fullName,
      loggedPhone: newUser.phone,
      loggedEmail: newUser.email,
      isLoggedIn: true,
    })
  }

export default {
  handleUserLoginChange,
  handleUserPassChange,
  handleUserEmailChange,
  handleUserPhoneChange,
  handleUserfullNameChange,
  handleUserRegistrationSubmit,
}
