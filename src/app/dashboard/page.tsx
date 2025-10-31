"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Project = {
  id: number;
  name: string;
  status: string;
  created_at: string;
};

type DashboardData = {
  user: { name: string; role: string };
  stats: { totalUsers: number; totalProjects: number; activeProjects: number; systemStatus: string };
  recentActivities: { id: number; activity: string; created_at: string }[];
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProjectName, setNewProjectName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const API_BASE = "http://localhost:4000";

  // Fetch dashboard summary and projects
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [dashRes, projRes] = await Promise.all([
          fetch(`${API_BASE}/api/dashboard`),
          fetch(`${API_BASE}/api/projects`),
        ]);
        if (!dashRes.ok) throw new Error("Gagal mengambil dashboard");
        if (!projRes.ok) throw new Error("Gagal mengambil projects");
        const dashJson = await dashRes.json();
        const projJson = await projRes.json();
        setData(dashJson);
        setProjects(projJson);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addProject = async () => {
    if (!newProjectName.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/api/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newProjectName }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal menambah project");
      }
      const added = await res.json();
      setProjects((p) => [added, ...p]);
      setNewProjectName("");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Gagal menambah project");
    }
  };

  const deleteProject = async (id: number) => {
    if (!confirm("Yakin mau hapus project ini?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal menghapus project");
      }
      setProjects((p) => p.filter((x) => x.id !== id));
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Gagal menghapus project");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">🔄 Memuat...</div>;
  }

  if (!data) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Gagal memuat data</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-blue-200">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-blue-600 font-bold">Halo, {data.user.name}</h1>
              <p className="text-gray-600">Role: {data.user.role}</p>
            </div>

            <div className="text-right">
              <p className="text-blue-600 font-bold">{data.stats.totalUsers}</p>
              <p className="text-sm text-gray-500">Total Pengguna</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-indigo-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-700">{data.stats.totalProjects}</div>
              <div className="text-sm text-gray-600">Total Project</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700">{data.stats.activeProjects}</div>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <div className={`text-3xl font-bold ${data.stats.systemStatus === "Online" ? "text-green-700" : "text-red-600"}`}>{data.stats.systemStatus}</div>
              <div className="text-sm text-gray-600">System Status</div>
            </div>
          </div>
        </div>

        {/* Projects management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-blue-600 font-semibold mb-4">Projects</h2>

              {error && <div className="mb-4 text-red-600">{error}</div>}

              <div className="mb-4 flex gap-2">
                <input
                  className="text-black flex-1 border rounded-lg px-3 py-2"
                  placeholder="Nama project baru"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
                <button onClick={addProject} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Tambah</button>
              </div>

              <ul className="space-y-3">
                {projects.map((pr) => (
                  <li key={pr.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="text-black font-semibold">{pr.name}</div>
                      <div className="text-sm text-gray-500">Status: {pr.status} • dibuat {new Date(pr.created_at).toLocaleString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => deleteProject(pr.id)} className="bg-red-500 text-white px-3 py-1 rounded">Hapus</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent activities */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-blue-600 font-semibold mb-3">Aktivitas Terbaru</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {data.recentActivities.map((a) => (
                  <li key={a.id} className="border-b pb-2">{a.activity} <div className="text-xs text-gray-400">{new Date(a.created_at).toLocaleString()}</div></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
