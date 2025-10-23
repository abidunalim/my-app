document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      message.textContent = "Login berhasil! Mengalihkan ke dashboard...";
      message.classList.add("text-green-600");

      // Redirect ke halaman dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      message.textContent = result.message || "Login gagal!";
      message.classList.add("text-red-600");
    }
    
  } catch (error) {
    console.error(error);
    message.textContent = "Terjadi kesalahan koneksi ke server.";
    message.classList.add("text-red-600");
  }
});
