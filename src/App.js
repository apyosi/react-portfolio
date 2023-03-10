import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter /* basename='react-portfolio' */>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

