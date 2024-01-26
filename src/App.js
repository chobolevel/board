import { Route, Routes } from 'react-router-dom'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Root from './routes/Root'
import UserLogin from './routes/user/Login'
import BoardList from './routes/board/List'
import BoardDetail from './routes/board/Detail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/" element={<Root />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
