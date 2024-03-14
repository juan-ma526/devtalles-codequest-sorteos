import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../mongo/index";

export async function GET(request) {
  const user = await prisma.usuario.findMany();
  return NextResponse.json({ hola: "mundo", user });
}

