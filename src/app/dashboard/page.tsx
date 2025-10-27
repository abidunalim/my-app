"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface DashboardData {
  user: {
    name: string;
    role: string;
  };
  stats: {
    totalUsers: number;
    activeProjects: number;
    systemStatus: string;
  };
  recentActivities: {
    id: number;
    activity: string;
    time: string;
  }[];
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  // Ambil data dari API backend mock
  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        🔄 Sedang memuat data dashboard...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        ❌ Gagal memuat data dashboard.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-blue-200">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Selamat Datang, {data.user.name} 👋
          </h1>
          <p className="text-gray-600 mb-6">
            Role kamu: <span className="font-semibold text-indigo-600">{data.user.role}</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-700">{data.stats.totalUsers}</div>
              <p className="text-gray-600">Total Pengguna</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-700">{data.stats.activeProjects}</div>
              <p className="text-gray-600">Proyek Aktif</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl text-center">
              <div
                className={`text-3xl font-bold ${
                  data.stats.systemStatus === "Online" ? "text-green-700" : "text-red-600"
                }`}
              >
                {data.stats.systemStatus}
              </div>
              <p className="text-gray-600">Status Sistem</p>
            </div>
          </div>

          {/* Recent Activities */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Aktivitas Terbaru 🕒
          </h2>
          <ul className="space-y-3 text-gray-700">
            {data.recentActivities.map((item) => (
              <li
                key={item.id}
                className="flex justify-between bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
              >
                <span>{item.activity}</span>
                <span className="text-gray-500 text-sm">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
