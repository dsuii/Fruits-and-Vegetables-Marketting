import React from 'react';
import './App.css'; 
import ImageSlider from './Image/ImageSlider.jsx';
import {Link} from 'react-router-dom';
import ProductPage from './components/ProductPage'; 

function App() {
  return (
      <div className="container">
        <header>
          <h1>Fruits And Vegetables Market</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Fruits & Vegetables</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="banner">
          </section>
        </main>
        <div className='img'>
              <ImageSlider />
           
        </div>
        <footer>
          <p>&copy; 2024 Fruits and Vegetables Market</p>
        </footer>
      </div>
    
  );
}

export default App;
