// components/NavBar.jsx
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <nav className={`sticky top-0 w-full z-50 px-8 py-6 flex justify-center items-center transition-all duration-500 bg-transparent text-white backdrop-blur-sm`}>
      <div className="space-x-10 text-lg font-semibold">
        <a href="#schedule" className="hover:text-red-400">Schedule</a>
        <a href="#rsvp" className="hover:text-red-400">RSVP</a>
        <a href="https://www.gofundme.com/f/support-the-wisconsin-divine-mercy-festival" className="hover:text-red-400">Donate</a>
        <a href="#location" className="hover:text-red-400">Location</a>
      </div>
    </nav>
  );
}