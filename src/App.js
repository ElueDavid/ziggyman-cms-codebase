import React from 'react';
import './App.css';
import AdminLogin from './pages/AdminLogin';
import Portfoliopage from './pages/Portfoliopage';
import Lightpages from './pages/Lightpages';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/Portfoliopage' element={<Portfoliopage />} /> 
          <Route path='/Lightpages' element={<Lightpages/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Clients' element={<Clients/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

