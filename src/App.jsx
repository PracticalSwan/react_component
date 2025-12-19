import './App.css'
import { Route, Routes } from 'react-router-dom'
import Greetings from './components/Greetings'
import Profile from './components/Profile'
function App() {
  return (
    <div className='card'>
    <Routes>
      <Route path='/' element={<Greetings/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
  )
}
export default App