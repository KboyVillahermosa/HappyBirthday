import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { Component as Navbar } from './components/navbar/Navbar';
import Gallery from './components/gallery/Gallery';
import Pictures from './components/pictures/Pictures';

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='' element={<>
        <Header />
        <Gallery />
        <Pictures />
        </>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
