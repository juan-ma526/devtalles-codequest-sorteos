import { NextResponse, NextRequest } from "next/server";
import { bcryptAdapter } from "../../config";
import { prisma } from "../../mongo";
import { jwtAdapter } from "../../config/jwt.adapter";

//METODO QUE ME PERMITE REGISTRAR EL USUARIO
export async function POST(request) {
  const { email, password, name } = await request.json(); //esto me retorna el body del post
  const passwordHashed = bcryptAdapter.hash(password);

  const userData = {
    email,
    password: passwordHashed,
    name,
  };
  const userPost = await prisma.usuario.create({
    data: userData,
  });

  if (!userPost) {
    return NextResponse.json({ error: "No se pudo registrar el usuario correctamente" }, { status: 400 });
  }
  const token = await jwtAdapter.generateToken(userPost.id);

  const response = NextResponse.json({
    user: {
      id: userPost.id,
      email: userPost.email,
      name: userPost.name,
    },
  });

  //response.cookies.set("token", token);
  return response;
}
