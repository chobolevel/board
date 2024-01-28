import { boards } from '../../data'
import BoardList from '../../components/board/List'

const List = () => {
  return (
    <>
      <BoardList boards={boards} />
    </>
  )
}

export default List
