
// components/Header.jsx
import heroImg from '../assets/divine-one-month.png';

export default function Header() {
  return (
    <header
      className="h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1 className="text-8xl font-extrabold drop-shadow-lg">DIVINE MERCY<br /><span className="text-red-400">FESTIVAL</span></h1>
      <p className="mt-6 text-2xl drop-shadow-sm">Sunday, April 27th, 2025 · Madison, WI · James Madison Park</p>
    </header>
  );
}
