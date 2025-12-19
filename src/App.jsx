import './App.css'
import Greetings from './components/Greetings'
import User from './components/User'

function App() {
  return (
    <div className="card">
      <div>
        <Greetings message="Hello, React!"/>
        <User name="Sithu Win San"/>
      </div>
      
    </div>
  )
}
export default App