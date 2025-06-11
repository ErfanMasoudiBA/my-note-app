import { getUserFromSession } from "../../lib/auth";

// const notes: any[] = []; // ذخیره موقتی یادداشت‌ها

type Note = {
  id: number;
  text: string;
  user: string;
};

const notes: Note[] = [];

export async function GET() {
  return Response.json(notes);
}

export async function POST(req: Request) {
  const user = await getUserFromSession();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const newNote = { id: Date.now(), text: body.text, user: user.name };
  notes.push(newNote);

  return Response.json(newNote, { status: 201 });
}
