import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
// import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <PromoBanner />
      {/* <CategorySection /> */}
      <Footer />
    </div>
  );
}

export default App;
