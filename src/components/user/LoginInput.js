import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducer/user'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginInput = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleUserLogin()
    }
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleUserLogin = () => {
    dispatch(login(username, password))
    setUsername('')
    setPassword('')
  }
  useEffect(() => {
    if (user.isAuth) {
      navigate('/')
    }
  }, [user, navigate])
  return (
    <div className="input-area-wrapper">
      <div className="input-area-inner">
        <div className="input-item">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            onKeyDown={handleKeyDown}
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className="input-item">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            onKeyDown={handleKeyDown}
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="btn-item">
          <button onClick={handleUserLogin}>로그인</button>
        </div>
      </div>
    </div>
  )
}

export default LoginInput
