import { users } from '../../data'

export const LOGIN = 'USER/LOGIN'

export const login = (username, password) => {
  return {
    type: LOGIN,
    username,
    password,
  }
}

const initUser = {
  isAuth: false,
  id: 0,
  name: 'anonymous',
  role: 'ROLE_ANONYMOUS',
}

const user = (state = initUser, action) => {
  switch (action.type) {
    case LOGIN:
      const user = users.find(
        (user) => user.username === action.username && user.password === action.password
      )
      if (user) {
        return {
          ...state,
          isAuth: true,
          id: user.id,
          name: user.name,
          role: user.role,
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default user
