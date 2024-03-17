import { prisma } from "@/app/api/mongo";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const sorteoId = searchParams.get("state");

    if (code) {
      const formData = new URLSearchParams({
        client_id: process.env.ClientID,
        client_secret: process.env.ClientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: `${process.env.BACKEND_URL}/api/auth/discord/redirect`,
      });

      const output = await fetch("https://discord.com/api/v10/oauth2/token", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (!output.ok) {
        throw new Error(`Error al obtener el token: ${output.status} ${output.statusText}`);
      }

      const outputData = await output.json();
      const access = outputData.access_token;

      const userInfoResponse = await fetch("https://discord.com/api/v10//users/@me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      const userServersResponse = await fetch("https://discord.com/api/v10//users/@me/guilds", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      if (!userInfoResponse.ok) {
        throw new Error(
          `Error al obtener la información del usuario: ${userInfoResponse.status} ${userInfoResponse.statusText}`
        );
      }

      if (!userServersResponse.ok) {
        throw new Error(
          `Error al obtener los servidores del usuario: ${userServersResponse.status} ${userServersResponse.statusText}`
        );
      }

      const userInfoData = await userInfoResponse.json();
      const userServerData = await userServersResponse.json();

      const devTallesID = process.env.DevtallesID;

      const serverFound = userServerData.find((server) => server.id === devTallesID);

      if (serverFound) {
        const participanteSelected = await prisma.participante.findFirst({
          where: {
            email: userInfoData.email,
            sorteoId,
          },
        });

        const sorteoSelected = await prisma.sorteo.findUnique({
          where: {
            id: sorteoId,
          },
          include: {
            participantes: true,
          },
        });

        if (participanteSelected && participanteSelected.id) {
          const participanteExistente = sorteoSelected.participantes.filter(
            (participante) => participante.id === participanteSelected.id
          );
          if (participanteExistente.length > 0) {
            const errorUrl = new URL("/error", request.url);
            errorUrl.searchParams.set("from", request.nextUrl.pathname);
            return NextResponse.redirect(errorUrl);
          }
        } else {
          await prisma.participante.create({
            data: {
              email: userInfoData.email,
              username: userInfoData.username,
              avatar: userInfoData.avatar,
              sorteoId: sorteoSelected.id,
            },
          });
        }
      } else {
        const notfoundUrl = new URL("/user-notfound", request.url);

        notfoundUrl.searchParams.set("from", request.nextUrl.pathname);

        return NextResponse.redirect(notfoundUrl);
      }

      const successUrl = new URL("/success", request.url);

      successUrl.searchParams.set("from", request.nextUrl.pathname);

      return NextResponse.redirect(successUrl);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return NextResponse.error(error.message, { status: 500 });
  }
}
