import { NextResponse } from "next/server";
import { prisma } from "../mongo";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json({ message: "Take debe ser un numero" }, { status: 400 });
  }

  if (isNaN(skip)) {
    return NextResponse.json({ message: "Skip debe ser un numero" }, { status: 400 });
  }

  const participantes = await prisma.participante.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(participantes);
}

export async function DELETE(req) {
  const deleteParticipantes = await prisma.participante.deleteMany();

  return NextResponse.json({ message: "Todos los participantes fueron borrados" });
}
