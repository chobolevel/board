import CommentListItem from './ListItem'

const List = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </ul>
  )
}

export default List
