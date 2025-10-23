"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-blue-200">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Selamat Datang di Dashboard MyApp
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Halo bang Abidun, kamu berhasil login nih!
        </p>

        <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
            Data Ringkasan
          </h2>
          <ul className="text-gray-700 text-left space-y-2">
            <li>• Total Pengguna: 120</li>
            <li>• Total Proyek Aktif: 8</li>
            <li>• Sistem Status: <span className="text-green-600 font-semibold">Online</span></li>
          </ul>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
