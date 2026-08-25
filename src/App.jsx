import { useState } from 'react'
import AppRouter from './components/Nav';

function App() {


  return (
      <div className='app'>
      <nav >
          <AppRouter/>
      </nav>
    
    
      <footer className="footer" id="contact">
        <p></p>
      </footer>

    </div>
  )
}

export default App
