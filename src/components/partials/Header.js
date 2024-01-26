import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = useSelector((state) => state.user)
  return (
    <div>
      <div>
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
            <li>
              <Link to="/logout">로그아웃</Link>
            </li>
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
