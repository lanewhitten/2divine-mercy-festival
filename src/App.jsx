// App.jsx
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Actions from './components/Actions';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Footer from './components/Footer';
import heroImg from './assets/divine-one-month.png';
import NearbyParking from './components/NearbyParking';


function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Background image behind everything */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <NavBar />
      <Header />
      <div className="fade-in">
        <Actions />
        <Schedule />
        <Location />
        <NearbyParking />
        <Footer />
      </div>
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showButton ? 'show' : ''}`}
      >
        Back to Top
      </button>
    </>
  );
}

export default App;