import userLoginActions from './user-login-actions'
import userRegistrationActions from './user-register-actions'
import taskActions from './task-actions'

export default {
  ...userLoginActions,
  ...taskActions,
  ...userRegistrationActions,
}