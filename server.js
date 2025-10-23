// Import Express
const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route dasar
app.get("/", (req, res) => {
  res.send("Halo Bang Abidun! Backend kamu sudah jalan 🚀");
});

// Contoh endpoint API
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Abidun", role: "Admin" },
    { id: 2, name: "Alim", role: "User" },
  ];
  res.json(users);
});

// Contoh POST endpoint
app.post("/api/send", (req, res) => {
  const data = req.body;
  res.json({ message: "Data diterima", data });
});

// Dummy data user
const users = [
  { email: "admin@abidun.com", password: "123456" },
  { email: "user@abidun.com", password: "password" },
];

// Endpoint login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: "Login sukses!", user });
  } else {
    res.status(401).json({ message: "Email atau password salah!" });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));
