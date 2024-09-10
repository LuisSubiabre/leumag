import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarTop from "./components/NavbarTop";
import Home from './components/Home';
import { Header } from './components/Header';
import { Estamentos } from './components/Estamentos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Horarios from './components/Horarios';
import Materiales from './components/Materiales';
import Evaluaciones from './components/Evaluaciones';
import Noticia from './components/Noticia';
import Noticias from './components/Noticias';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import { Comunicados } from './components/Comunicados';


function App() {


  return (
    <Router>
      <ScrollToTop />
      <NavbarTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Estamentos" element={<Estamentos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Horarios" element={<Horarios />} />
        <Route path="/Materiales" element={<Materiales />} />
        <Route path="/Evaluaciones" element={<Evaluaciones />} />
        <Route path='/Noticia/:id' element={<Noticia />} />
        <Route path='/Noticias' element={<Noticias />} />
        <Route path="/Comunicados" element={<Comunicados />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para manejar 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
