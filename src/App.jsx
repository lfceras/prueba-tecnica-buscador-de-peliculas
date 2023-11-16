import { Suspense } from 'react'
import './App.css'
import { Home } from './components/home/Home'

function App() {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Home />
      </Suspense>
    </div>
  )
}   

export default App
