"use client";

export default function LoginPage() {
  const handleLogin = async () => {
    await fetch("/api/login", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>🔐 ورود</h1>
      <button onClick={handleLogin}>ورود به سیستم</button>
    </main>
  );
}
