import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './page/ProductDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './page/Home';
import Product from './page/Products';
import Category from './page/Category';
import It from './page/It';
import Signin from './page/Signin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/category'element={<Category />}/>
        <Route path='/news' element={<It />}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
