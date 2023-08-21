import {useState, createContext} from 'react'
import Quiz from './components/Quiz'
import Menu from './components/Menu'
import Score from './components/Score'
import './App.css'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState('menu')
  return ( 
    <DataContext.Provider value={{appState, setAppState}}>
      <div className="App">
          <h1>Web Develop QUIZ</h1>
          {appState === 'menu' && <Menu/>}
          {appState === 'quiz' && <Quiz/>}
          {appState === 'score' && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
