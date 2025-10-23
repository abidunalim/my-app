"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold">MyApp</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Membangun solusi digital yang inovatif untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/tentang/" className="hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

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

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-300">
              <li>email@example.com</li>
              <li>+62 123 4567 890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}