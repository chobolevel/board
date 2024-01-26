import { useSelector } from 'react-redux'
import CommentList from '../comment/List'

const Detail = ({ board, isWriter }) => {
  const user = useSelector((state) => state.user)
  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      {isWriter ? (
        <CommentList comments={board.comments} />
      ) : (
        <CommentList comments={board.comments.filter((comment) => comment.writerId === user.id)} />
      )}
    </div>
  )
}

export default Detail
