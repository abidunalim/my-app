"use client";

import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from './components/Card'
import Footer from './components/Footer'
import Login from "./login/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import link from "next/link";

function Tentang() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
      <p className="text-gray-600">
        Halaman tentang sementara — buat file <code>src/pages/Tentang.tsx</code> jika Anda ingin memisahkan komponen ini.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<Tentang />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default function Home() {
  const features = [
    {
      title: 'Mudah Digunakan',
      description: 'Interface yang intuitif dan user-friendly untuk semua kalangan',
      icon: '🎯',
      color: 'bg-blue-500'
    },
    {
      title: 'Cepat & Efisien',
      description: 'Proses yang cepat dengan performa optimal setiap saat',
      icon: '⚡',
      color: 'bg-green-500'
    },
    {
      title: 'Aman Terjamin',
      description: 'Keamanan data Anda adalah prioritas utama kami',
      icon: '🔒',
      color: 'bg-purple-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Digital Marketer',
      content: 'MyApp sangat membantu pekerjaan saya sehari-hari. Interface yang clean dan fitur yang lengkap!',
      avatar: '👩‍💼'
    },
    {
      name: 'Rizky Pratama',
      role: 'Freelancer',
      content: 'Prosesnya cepat dan mudah dipahami. Recommended banget untuk yang baru mulai!',
      avatar: '👨‍💻'
    },
    {
      name: 'Diana Putri',
      role: 'Business Owner',
      content: 'Sejak pakai MyApp, produktivitas tim saya meningkat signifikan. Terima kasih!',
      avatar: '👩‍💼'
    }
  ]

  const pricingPlans = [
    {
      name: 'Gratis',
      price: '0',
      period: 'selamanya',
      features: [
        '10 project aktif',
        '5GB storage',
        'Dukungan komunitas',
        'Fitur dasar'
      ],
      cta: 'Mulai Gratis',
      popular: false
    },
    {
      name: 'Pro',
      price: '99',
      period: '/bulan',
      features: [
        'Unlimited project',
        '50GB storage',
        'Dukungan prioritas',
        'Semua fitur premium',
        'Analytics lengkap'
      ],
      cta: 'Coba Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '299',
      period: '/bulan',
      features: [
        'Unlimited everything',
        '500GB storage',
        'Dedicated support',
        'Custom integration',
        'SLA 99.9%',
        'Training tim'
      ],
      cta: 'Hubungi Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section id="fitur" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-blue-600">MyApp</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform semua-in-satu yang dirancang untuk membantu Anda mencapai tujuan dengan lebih efisien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Cara Kerjanya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Daftar Akun</h3>
              <p className="text-gray-600">Registrasi dalam 1 menit, gratis tanpa biaya</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Setup Project</h3>
              <p className="text-gray-600">Buat project pertama Anda dengan mudah</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mulai Bekerja</h3>
              <p className="text-gray-600">Gunakan semua fitur untuk produktivitas maksimal</p>
            </div>
          </div>
        </div>
      </section>
            

      {/* Testimonials Section */}
      <section id="testimoni" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Kata Mereka
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Lihat apa yang dikatakan pengguna tentang pengalaman mereka
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pilih Paket Anda
            </h2>
            <p className="text-xl text-gray-600">
              Mulai gratis, upgrade kapan saja sesuai kebutuhan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500 transform scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2">
                    <span className="font-semibold">Paling Populer</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">Rp {plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mulai Perjalanan Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabung dengan ribuan pengguna yang sudah merasakan manfaat MyApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Daftar Sekarang - Gratis!
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Jadwalkan Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
