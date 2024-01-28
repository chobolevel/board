import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../reducer/user'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/board/list">게시글 목록</Link>
          </li>
        </ul>
        <ul>
          {user.isAuth ? (
            <>
              <li>
                <p>{user.name}님 환영합니다.</p>
              </li>
              <li>
                <Link to="/logout" onClick={handleLogout}>
                  로그아웃
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">로그인</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
