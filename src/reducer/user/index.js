import { users } from '../../data'

const LOGIN = 'USER/LOGIN'
const LOGOUT = 'USER/LOGOUT'

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
        alert('로그인 성공')
        return {
          ...state,
          isAuth: true,
          id: user.id,
          name: user.name,
        }
      } else {
        alert('[로그인 실패]\n로그인 정보를 찾을 수 없습니다.')
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
