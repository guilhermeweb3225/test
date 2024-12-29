import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projetos from './Pages/Projetos/Projetos'
import Tecnologias from './Pages/Tecnologias/Tecnologias'
import SobreMim from './Pages/SobreMim/Sobre'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='test/'element={<Projetos/>}></Route>
        <Route path='test/Tecnologias'element={<Tecnologias/>}></Route>
        <Route path='test/Sobre'element={<SobreMim/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
