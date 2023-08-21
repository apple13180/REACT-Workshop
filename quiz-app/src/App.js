import {useState} from 'react'
import Quiz from './components/Quiz'
import Menu from './components/Menu'
import Score from './components/Score'

function App() {
  const [appState, setAppState] = useState('score')
  return ( 
    <div className="App">
      <h1>Web Develop QUIZ</h1>
      {appState === 'menu' && <Menu/>}
      {appState === 'quiz' && <Quiz/>}
      {appState === 'score' && <Score/>}
    </div>
  );
}

export default App;
