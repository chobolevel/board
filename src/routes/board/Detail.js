import { boards } from '../../data'
import { useParams } from 'react-router-dom'
import BoardDetail from '../../components/board/Detail'
import { useSelector } from 'react-redux'

const Detail = () => {
  const { id } = useParams()
  const board = boards.find((board) => board.id === Number(id))
  const user = useSelector((state) => state.user)
  const isWriter = board.writerId === user.id
  return <BoardDetail board={board} isWriter={isWriter} />
}

export default Detail
