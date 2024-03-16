import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtAdapter } from "../../config/jwt.adapter";
import { prisma } from "../../mongo";

export async function GET(request) {
    const cookiesStore=cookies();
    const {value:token}=cookiesStore.get('token');
    if (!token) return NextResponse.json({ message: "No hay un token" },{status:400});

    const verifyToken=await jwtAdapter.validateToken(token);
    if(!verifyToken) return NextResponse.json({ message: "token no valido para el usuario" },{status:400});


    try {
        const userData=await prisma.usuario.findUnique({
            where:{
                id:verifyToken
            }
        })
    
        const {password,...rest}=userData;
    
    
        return NextResponse.json({user:rest});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "ERROR AL DEVOLVER EL USUARIO DEL BACKEND" },{status:500});
    }
  
}