"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    // ری‌دایرکت بعد از خروج
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "crimson",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      خروج
    </button>
  );
}
