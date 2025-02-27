
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomeBar from './components/HomeBar'
import AddBar from './components/AddBar'

function App() {
 

  return (
    <>
      <div>
      <NavBar/>
      <Routes>
      <Route  path="/h" element={<HomeBar/>}/>
      <Route path="/a" element={<AddBar/>}/>
    </Routes>
      </div>
    </>
  )
}

export default App
