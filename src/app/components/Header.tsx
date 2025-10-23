'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-800">MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-blue-600 font-semibold transition-colors">
              Beranda
            </a>
            <a href="/tentang" className="text-blue-600 font-semibold transition-colors">
              Tentang
            </a>
            <a href="#fitur" className="text-blue-600 font-semibold transition-colors">
              Fitur
            </a>
            <a href="#harga" className="text-blue-600 font-semibold transition-colors">
              Harga
            </a>
            <a href="#testimoni" className="text-blue-600 font-semibold transition-colors">
              Testimoni
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-blue-600 hover:text-blue-600 transition-colors" style={{padding:'5px'}}>
              Masuk
            </a>
            <br></br>
            
            <button  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Daftar Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-blue-600 font-semibold transition-colors">
                Beranda
              </a>
              <a href="/tentang" className="text-blue-600 font-semibold transition-colors">
                Tentang
              </a>
              <a href="#fitur" className="text-blue-600 font-semibold transition-colors">
                Fitur
              </a>
              <a href="#harga" className="text-blue-600 font-semibold transition-colors">
                Harga
              </a>
              <a href="#testimoni" className="text-blue-600 font-semibold transition-colors">
                Testimoni
              </a>
              <div className="pt-4 border-t">
                <a href="/login" className="block text-gray-600 hover:text-blue-600 transition-colors mb-3">
                  Masuk
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                  Daftar Gratis
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}