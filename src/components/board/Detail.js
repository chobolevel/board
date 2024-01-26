import CommentList from '../comment/List'

const Detail = ({ board }) => {
  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <CommentList comments={board.comments} />
    </div>
  )
}

export default Detail
