import { cookies } from "next/headers";

export async function getUserFromSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (token === "secure-user-token") {
    return { id: 1, name: "Ali" }; // کاربر فرضی
  }

  return null;
}
