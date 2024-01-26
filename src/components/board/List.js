import BoardListItem from './ListItem'

const List = ({ boards }) => {
  return (
    <div>
      {boards.map((board) => (
        <BoardListItem key={board.id} board={board} />
      ))}
    </div>
  )
}

export default List
