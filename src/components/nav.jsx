import React, { useState } from "react";

const WebsiteLayout = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setIsNavOpen(false);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 relative">
          <div className="flex items-center space-x-4">
            <img src="logo.svg" alt="Peworld" className="h-8" />
            <span className="text-gray-800 font-bold text-lg">Peworld</span>
          </div>
          <button
            className="md:hidden block text-gray-600 hover:text-gray-800 transition-colors"
            onClick={handleNavToggle}
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            className={`md:flex md:items-center md:space-x-6 absolute top-full left-0 w-full bg-white shadow-md p-4 ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#"
              className={`block text-gray-600 hover:text-gray-800 transition-colors ${
                activeNavItem === "home" ? "text-gray-800 font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("home")}
            >
              Home
            </a>
            <a
              href="#"
              className={`block text-gray-600 hover:text-gray-800 transition-colors ${
                activeNavItem === "about" ? "text-gray-800 font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("about")}
            >
              About
            </a>
            <a
              href="#"
              className={`block text-gray-600 hover:text-gray-800 transition-colors ${
                activeNavItem === "company" ? "text-gray-800 font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("company")}
            >
              Perusahaan
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        {activeNavItem === "home" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome to Peworld</h1>
            <p className="text-gray-600 mb-8">
              Peworld adalah platform yang menyediakan solusi perekrutan
              terbaik.
            </p>
            {/* Tambahkan konten halaman Home di sini */}
          </div>
        )}
        {activeNavItem === "about" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 mb-8">
              Peworld didirikan dengan tujuan membantu perusahaan dan pencari
              kerja menemukan satu sama lain.
            </p>
            {/* Tambahkan konten halaman About di sini */}
          </div>
        )}
        {activeNavItem === "company" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Our Company</h1>
            <p className="text-gray-600 mb-8">
              Peworld adalah perusahaan teknologi yang berfokus pada solusi
              perekrutan terbaik.
            </p>
            {/* Tambahkan konten halaman Perusahaan di sini */}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Peworld. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
