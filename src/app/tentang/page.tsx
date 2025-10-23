"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react";


export default function Tentang() {
  const teamMembers = [
    {
      name: "Ahmad Wijaya",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Berpengalaman 10+ tahun di industri teknologi"
    },
    {
      name: "Sari Dewi",
      role: "CTO",
      image: "👩‍💻",
      description: "Ahli dalam pengembangan software dan AI"
    },
    {
      name: "Budi Santoso",
      role: "Head of Design",
      image: "👨‍🎨",
      description: "Spesialis UI/UX dengan passion untuk design yang user-friendly"
    },
    {
      name: "Maya Sari",
      role: "Marketing Director",
      image: "👩‍💼",
      description: "Expert dalam strategi digital marketing"
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Berdiri",
      description: "MyApp didirikan dengan visi untuk menyediakan solusi digital yang inovatif"
    },
    {
      year: "2021",
      title: "Peluncuran Produk",
      description: "Meluncurkan produk pertama dengan 10.000+ pengguna"
    },
    {
      year: "2022",
      title: "Ekspansi Tim",
      description: "Mengembangkan tim dari 5 menjadi 25 orang profesional"
    },
    {
      year: "2023",
      title: "Pencapaian Baru",
      description: "Mencapai 100.000+ pengguna aktif di seluruh Indonesia"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tentang <span className="text-blue-600">MyApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Kami adalah perusahaan teknologi yang berkomitmen untuk menciptakan solusi inovatif 
            yang memudahkan kehidupan digital masyarakat Indonesia.
          </p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Menjadi platform digital terdepan di Indonesia yang memberikan dampak positif 
                bagi masyarakat melalui inovasi teknologi yang accessible dan mudah digunakan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h2>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mengembangkan solusi teknologi yang memecahkan masalah nyata
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Memberikan pengalaman pengguna yang luar biasa
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Berkontribusi pada ekosistem digital Indonesia
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Selalu berinovasi dan beradaptasi dengan perkembangan teknologi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Perjalanan Kami
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Tim Kami
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Bertemu dengan orang-orang hebat di balik kesuksesan MyApp
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100K+</div>
              <p className="text-gray-300">Pengguna Aktif</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
              <p className="text-gray-300">Anggota Tim</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">3+</div>
              <p className="text-gray-300">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <p className="text-gray-300">Penghargaan</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}