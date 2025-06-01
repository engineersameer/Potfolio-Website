// src/Header.jsx
import logoPic from './pic.jpg';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logoPic} alt="Logo" className="h-10 w-10 mr-3 rounded-full object-cover" />
            <h1 className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Portfolio
            </h1>
          </div>

          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap md:flex-nowrap justify-center gap-8 text-lg font-medium">
              {[
                ['Home', '#home'],
                ['Projects', '#projects'],
                ['Experience', '#experience'],
                ['Skills', '#skills'],
                ['Contact', '#contact']
              ].map(([title, url]) => (
                <li key={title}>
                  <a
                    href={url}
                    className="relative group transition-all duration-300 ease-in-out"
                  >
                    <span className="relative inline-block transform hover:translate-y-[-2px]">
                      {title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}