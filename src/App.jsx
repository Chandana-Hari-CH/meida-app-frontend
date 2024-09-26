
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import LandingPage from './pages/LandingPage.jsx'
import WatchHistory from './pages/WatchHistory.jsx'

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
