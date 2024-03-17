import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

//METODO QUE ME PERMITE CERRAR SESION AL USUARIO
export async function POST(request) {
  try {
    const cookiesStore = cookies();
    cookiesStore.set("token", "", { expires: new Date(0) });
    return NextResponse.json({ logout: "Cerraste sesion correctamente" }, { status: 200 });
    /*   const {value:token}= cookiesStore.get('token');
        if (!token) return NextResponse.json({ message: "No hay un usuario" },{status:400}); */

    //metodo para eliminar la cookie
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "no existe un usuario-logeado" }, { status: 401 });
  }
}
