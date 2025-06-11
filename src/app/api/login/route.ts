import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // ست‌کردن کوکی ورود
  response.cookies.set("auth-token", "secure-user-token", {
    // httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 روز
  });

  return response;
}
