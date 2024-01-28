import { useSelector } from 'react-redux'
import CommentList from '../comment/List'

const Detail = ({ board, isWriter }) => {
  const user = useSelector((state) => state.user)
  return (
    <div className="board-detail-wrapper">
      <div className="board-detail-inner">
        <h2 className="board-detail-title">{board.title}</h2>
        <p className="board-detail-content">{board.content}</p>
        {isWriter ? (
          <CommentList comments={board.comments} />
        ) : (
          <CommentList
            comments={board.comments.filter((comment) => comment.writerId === user.id)}
          />
        )}
      </div>
    </div>
  )
}

export default Detail
