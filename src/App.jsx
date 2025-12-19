import './App.css'
import { Route, Routes } from 'react-router-dom'
import Greetings from './components/Greetings'
import Profile from './components/Profile'
function App() {
  return (
    <div className='card'>
    <Routes>
      <Route path='/react-component-deploy/' element={<Greetings/>}/>
      <Route path='/react-component-deploy/profile' element={<Profile/>}/>
    </Routes>
    </div>
  )
}
export default App