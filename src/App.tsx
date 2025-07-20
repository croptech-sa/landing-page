import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.className = isDark ? 'dark' : '';
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Page1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;