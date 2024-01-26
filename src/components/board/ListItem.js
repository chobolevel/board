import { Link } from 'react-router-dom'

const ListItem = ({ board }) => {
  return (
    <div>
      <Link to={`/board/${board.id}`}>{board.title}</Link>
    </div>
  )
}

export default ListItem
