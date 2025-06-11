"use client";
import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";

type Note = {
  id: number;
  text: string;
  user: string;
};

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  const addNote = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (res.status === 401) {
      setUnauthorized(true);
      return;
    }

    const newNote: Note = await res.json();
    setNotes((prev) => [...prev, newNote]);
    setText("");
  };

  return (
    <>
      <main style={{ padding: 40 }}>
        <h1>📓 یادداشت‌ها</h1>

        {unauthorized && (
          <div style={{ color: "red" }}>
            برای افزودن یادداشت باید <a href="/login">وارد شوید</a>.
          </div>
        )}

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="یادداشت بنویس..."
        />
        <button onClick={addNote}>افزودن</button>

        <ul>
          {notes.map((note: any) => (
            <li key={note.id}>
              📝 {note.text} (توسط {note.user})
            </li>
          ))}
        </ul>
        <h1>خوش اومدی!</h1>

        {/* نمایش دکمه خروج */}
        <LogoutButton />
      </main>
    </>
  );
}
