import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/home';
import Store from './pages/store';
import About from './pages/about';
import Navbar from './components/navbar';
import { ShopCartProvider } from './context/ShopCartContext';

function App() {

  return (
    <ShopCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShopCartProvider>
  )
}

export default App
