import { boards } from '../../data'
import BoardList from '../../components/board/List'

const List = () => {
  return (
    <div>
      <h1>게시글 목록</h1>
      <BoardList boards={boards} />
    </div>
  )
}

export default List
