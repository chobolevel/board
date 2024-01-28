import CommentListItem from './ListItem'

const List = ({ comments }) => {
  return (
    <>
      {comments.length !== 0 ? (
        <div className="comment-list-wrapper">
          <div className="comment-list-inner">
            <p className="comment-list-title">댓글 목록</p>
            <div className="comment-list-content">
              {comments.map((comment) => (
                <CommentListItem key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default List
