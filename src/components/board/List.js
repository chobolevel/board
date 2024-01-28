import BoardListItem from './ListItem'

const List = ({ boards }) => {
  return (
    <div className="board-list-wrapper">
      <div className="board-list-inner">
        <p className="board-list-title">게시글 목록</p>
        <div className="board-list-content">
          {boards.map((board) => (
            <BoardListItem key={board.id} board={board} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
