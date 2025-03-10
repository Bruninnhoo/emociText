import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'
import Site from './site.jsx'

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Site />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App