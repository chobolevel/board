import { useSelector } from 'react-redux'
import { UserRoleEnum } from '../enums/User'

const ListItem = ({ comment }) => {
  const user = useSelector((state) => state.user)
  return (
    <div>
      {user.role}
      <h4>{comment.title}</h4>
      <p>{comment.content}</p>
    </div>
  )
}

export default ListItem
