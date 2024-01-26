const ListItem = ({ comment }) => {
  return (
    <div>
      <h4>{comment.title}</h4>
      <p>{comment.content}</p>
    </div>
  )
}

export default ListItem
