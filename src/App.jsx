import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projetos from './Pages/Projetos/Projetos'
import Tecnologias from './Pages/Tecnologias/Tecnologias'
import SobreMim from './Pages/SobreMim/Sobre'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Projetos/>}></Route>
        <Route path='/Tecnologias'element={<Tecnologias/>}></Route>
        <Route path='/Sobre'element={<SobreMim/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
