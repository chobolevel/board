import { Link } from 'react-router-dom'

const ListItem = ({ board }) => {
  return (
    <div className="board-list-item">
      <Link to={`/board/${board.id}`}>{board.title}</Link>
    </div>
  )
}

export default ListItem
