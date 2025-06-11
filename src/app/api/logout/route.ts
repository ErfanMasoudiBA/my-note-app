import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // حذف کوکی با گذاشتن تاریخ انقضا گذشته
  response.cookies.set("auth-token", "", {
    maxAge: 0,
    path: "/", // باید با path اصلی کوکی یکی باشه
  });

  return response;
}
