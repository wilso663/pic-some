
import './App.css';
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/pic-some/" element={<Photos/>} />
          <Route path="/pic-some/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
