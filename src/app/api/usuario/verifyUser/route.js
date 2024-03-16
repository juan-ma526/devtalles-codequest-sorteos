import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }

  try {
    const user = jwt.verify(token.value, process.env.TOKEN_SECRET);
    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.error(err.message, { status: 500 });
  }
}
