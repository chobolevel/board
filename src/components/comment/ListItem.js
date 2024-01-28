const ListItem = ({ comment }) => {
  return (
    <div className="comment-list-item">
      <h4 className="comment-item-title">{comment.title}</h4>
      <p className="comment-item-content">{comment.content}</p>
    </div>
  )
}

export default ListItem
