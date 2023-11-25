import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home.jsx'
import {Projects} from './pages/Projects.jsx'
import {About} from './pages/About.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
