import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
