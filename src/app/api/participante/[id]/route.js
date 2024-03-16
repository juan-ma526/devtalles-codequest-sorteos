import { NextResponse } from "next/server";
import { prisma } from "../../mongo";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deleteParticipante = await prisma.participante.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(deleteParticipante, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "El id del participante no existe" }, { status: 400 });
  }
}
