import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    user: {
      name: "Abidun Alim",
      role: "AI Developer",
    },
    stats: {
      totalUsers: 128,
      activeProjects: 5,
      systemStatus: "Online",
    },
    recentActivities: [
      { id: 1, activity: "Login ke sistem", time: "1 jam lalu" },
      { id: 2, activity: "Update data proyek AI", time: "3 jam lalu" },
      { id: 3, activity: "Menambahkan anggota tim", time: "Kemarin" },
    ],
  };

  return NextResponse.json(data);
}
