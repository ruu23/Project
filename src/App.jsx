import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UserDetails from './pages/UserDetails'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/user' element={<UserDetails />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
