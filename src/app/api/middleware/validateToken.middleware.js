import { NextRequest, NextResponse } from "next/server";
import { jwtAdapter } from "../config/jwt.adapter";
import { prisma } from "../mongo";


export const AuthMiddleware={


   validateJWT:async (req = NextRequest) =>{

    const authorization = req.headers.get('Authorization');
    if (!authorization) return NextResponse.json({ error: 'No token provided' }, { status: 401 })
    if (!authorization.startsWith('Bearer ')) return NextResponse.json({ error: 'Invalid Bearer token' }, { status: 401 })
  
    const token = authorization.split(' ')[1] || ''
  
    try {
      const payload = await jwtAdapter.validateToken(token);
      if (!payload) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  
      const user=await prisma.usuario.findUnique({
        where:{
          id:payload.id,
        }
      })
      if (!user) return NextResponse.json({ error: 'Invalid token - user' }, { status: 401 })
  
      // TODO: validar si el usuario está activo
  
      req.cookies.set('user', JSON.stringify(user));
  
      return NextResponse.next();
      
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }

}