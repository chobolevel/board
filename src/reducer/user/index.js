import { users } from '../../data'

export const LOGIN = 'USER/LOGIN'
export const LOGOUT = 'USER/LOGOUT'

export const login = (username, password) => {
  return {
    type: LOGIN,
    username,
    password,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

const initUser = {
  isAuth: false,
  id: 0,
  name: 'anonymous',
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
        }
      } else {
        return state
      }
    case LOGOUT:
      return {
        ...initUser,
      }
    default:
      return state
  }
}

export default user
