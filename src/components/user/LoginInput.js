import { useDispatch } from 'react-redux'
import { login } from '../../reducer/user'
import { useState } from 'react'

const LoginInput = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
  return (
    <div className="input-area-wrapper">
      <div className="input-area-inner">
        <div className="input-item">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className="input-item">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
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
