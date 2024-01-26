import { boards } from '../../data'
import { useParams } from 'react-router-dom'
import BoardDetail from '../../components/board/Detail'

const Detail = () => {
  const { id } = useParams()
  const board = boards.find((board) => board.id === Number(id))
  return <BoardDetail board={board} />
}

export default Detail
