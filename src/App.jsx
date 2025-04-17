import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden' >
      <Header/>
      <About/>
    </div>
  )
}

export default App